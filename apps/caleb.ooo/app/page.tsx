"use client"
import { PropsWithChildren, useState } from "react";

export default function Page() {
  const [items, setItems] = useState<string[]>([])
  const onClick = (item: string) => {
    setItems((prevItems) => {
      return [item, ...prevItems]
    })
  }

  const buttons = ["❤️", "❓", "🚩", "💔", "💋", "♦️", "🌹", "❣️", "🎈", "‼️", "❌", "🍷", "❗️", "👹", "🅱️", "👺", "🍓", "📍", "🚨", "🍒", "🚗", "💄", "🔴", "⛽️", "🍎", "🐞", "📌", "🚘", "🥊", "🥩", "🍄", "🆘", "🅰️", "📛", "📮", "🦞"]
  return (
      <div className="text-red-light flex flex-col items-center h-full gap-8">
        <div className="inline-block font-bold text-8xl">offline</div>
        <div className="border-8 border-dashed border-red-light w-full text-8xl p-10 flex justify-between overflow-x-auto flex-shrink-0 space-x-8">
          {buttons.map(buttonText => <Button key={`button-${buttonText}`} onClick={() => onClick(buttonText)}>{buttonText}</Button>)}
        </div>
        <div className="flex-grow border-8 border-solid border-red-light w-full text-8xl p-10 flex flex-wrap gap-8">
          {items.map((item, index) => <span key={`item-${item}-${index}`}>{item}</span>)}
        </div>
      </div>
  );
}

interface ButtonProps extends PropsWithChildren {
  onClick?: () => void
}

const Button = ({children, onClick}: ButtonProps) => {
  return <button className="hover:scale-105 active:scale-100" onClick={onClick}>
    {children}
  </button>
}
