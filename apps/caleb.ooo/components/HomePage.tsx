"use client"

import { useMutation, useQuery } from "@tanstack/react-query";
import { createNewOfflineMessage } from "db";
import { Button } from "ui/components/ui/button"
import { useEffect, useState } from "react";
import { Message } from "db/types"
import { cn } from "@ui/lib/utils";

async function getOfflineMessages() {
  const res = await fetch('/api/messages')
  if (!res.ok) {
    throw new Error("Could not get messages")
  }
  const json = await res.json()
  return json as Message[]
}

interface HomePageProps {
  messages: Array<Message>
}

async function postOfflineMessage(message: string) {
  const res = await fetch('/api/messages', {
    method: 'POST',
    body: JSON.stringify({message})
  })
  if (!res.ok) {
    throw new Error("Could not post message")
  }
  const json = await res.json()
  return json
}

export default function HomePage({messages}: HomePageProps) {
  const {data: offlineMessages, refetch} = useQuery({
    queryFn: getOfflineMessages,
    queryKey: ["offline-messages"]
  })
  const mutation = useMutation({
    mutationFn: postOfflineMessage
    // onSuccess: () => {
    //   refetch()
    // }
  })

  const [mixedMessages, setMixedMessages] = useState(messages)

  // useEffect(() => {
  //   if (offlineMessages) {
  //     const uniqueMessages = offlineMessages.filter((message) => !mixedMessages.find((mixedMessage) => mixedMessage.id === message.id))
  //     console.log("debug:: uniquemessags", uniqueMessages)
  //     setMixedMessages(uniqueMessages)
  //   }
  // }, [offlineMessages])

  const onClick = (item: string) => {
    setMixedMessages((mixedMessages) => {
      const id = mixedMessages.length + 1
      const newMixedMessages = [{id, message: item}, ...mixedMessages]
      return newMixedMessages as Message[]
    })
    mutation.mutate(item)
  }
  const buttons = ["❤️", "❓", "🚩", "💔", "💋", "♦️", "🌹", "❣️", "🎈", "‼️", "❌", "🍷", "❗️", "👹", "🅱️", "👺", "🍓", "📍", "🚨", "🍒", "🚗", "💄", "🔴", "⛽️", "🍎", "🐞", "📌", "🚘", "🥊", "🥩", "🍄", "🆘", "🅰️", "📛", "📮", "🦞"]
  return (
      <div className="text-red-light flex flex-col items-center h-full gap-4 md:gap-8 text-4xl md:text-8xl">
        <div className="inline-block font-bold text-7xl md:text-8xl">offline</div>
        <div className="flex md:justify-between items-center border-4 md:border-8 border-dashed border-red-light w-full p-4 md:p-10 flex-shrink-0 space-y-2 md:overflow-x-auto flex-wrap md:flex-nowrap">
          {buttons.map(buttonText => <Button className="hover:opacity-100 opacity-30 px-2" variant="blob" size="inherit" key={`button-${buttonText}`} onClick={() => onClick(buttonText)}>{buttonText}</Button>)}
        </div>
        <div className="flex-grow border-4 md:border-8 border-solid border-red-light w-full p-4 md:p-10">
          {mixedMessages && mixedMessages.map((message, index, arr) => {
            const shouldSpin = index !== arr.length - 1 && arr[index + 1].message !== message.message && index !== 0 && arr[index - 1].message !== message.message
            return <span key={`item-${message.message}-${index}`} className={cn("inline-block", {"rotate-3d": shouldSpin})}>{message.message}</span>
          })}
        </div>
      </div>
  );
}
