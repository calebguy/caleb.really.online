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
      <div className="text-red-light flex flex-col items-center h-full gap-4 md:gap-8 text-4xl md:text-8xl">
        <div className="inline-block font-bold text-7xl md:text-8xl">offline</div>
        <div className="flex justify-between items-center border-4 md:border-8 border-dashed border-red-light w-full p-4 md:p-10 overflow-x-auto flex-shrink-0 space-x-4 md:space-x-8">
          {buttons.map(buttonText => <Button key={`button-${buttonText}`} onClick={() => onClick(buttonText)}>{buttonText}</Button>)}
        </div>
        <div className="flex-grow border-4 md:border-8 border-solid border-red-light w-full p-4 md:p-10">
          {items.map((item, index) => <span key={`item-${item}-${index}`} className="inline-block">{item}</span>)}
        </div>
      </div>
  );
}

interface ButtonProps extends PropsWithChildren {
  onClick?: () => void
}

const Button = ({children, onClick}: ButtonProps) => {
  return <button className="hover:scale-125 active:scale-100" onClick={onClick}>
    {children}
  </button>
}
