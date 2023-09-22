"use client"

import { useMutation, useQuery } from "@tanstack/react-query";
import { createNewOfflineMessage } from "db";
import { Button } from "ui/components/ui/button"

async function getOfflineMessages() {
  const res = await fetch('/api/messages')
  if (!res.ok) {
    throw new Error("Could not get messages")
  }
  const json = await res.json()
  return json
}

interface HomePageProps {
  messages: {message: string}[]
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
    mutationFn: postOfflineMessage,
    onSuccess: () => {
      refetch()
    }
  })
  const onClick = (item: string) => {
    mutation.mutate(item)
  }
  const buttons = ["❤️", "❓", "🚩", "💔", "💋", "♦️", "🌹", "❣️", "🎈", "‼️", "❌", "🍷", "❗️", "👹", "🅱️", "👺", "🍓", "📍", "🚨", "🍒", "🚗", "💄", "🔴", "⛽️", "🍎", "🐞", "📌", "🚘", "🥊", "🥩", "🍄", "🆘", "🅰️", "📛", "📮", "🦞"]
  return (
      <div className="text-red-light flex flex-col items-center h-full gap-4 md:gap-8 text-4xl md:text-8xl">
        <div className="inline-block font-bold text-7xl md:text-8xl">offline</div>
        <div className="flex justify-between items-center border-4 md:border-8 border-dashed border-red-light w-full p-4 md:p-10 overflow-x-auto flex-shrink-0 space-x-4 md:space-x-8">
          {buttons.map(buttonText => <Button variant="blob" size="inherit" key={`button-${buttonText}`} onClick={() => onClick(buttonText)}>{buttonText}</Button>)}
        </div>
        <div className="flex-grow border-4 md:border-8 border-solid border-red-light w-full p-4 md:p-10">
          {offlineMessages && offlineMessages.map((message, index) => <span key={`item-${message.message}-${index}`} className="inline-block">{message.message}</span>)}
        </div>
      </div>
  );
}
