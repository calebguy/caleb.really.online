import { createNewOfflineMessage, getOfflineMessages } from "db"
import { NextResponse } from "next/server"

const GET = async () => {
  const messages = await getOfflineMessages()
  return NextResponse.json(messages)
}

const POST = async (req: Request) => {
  const { message } = await req.json()
  const dbMessage = await createNewOfflineMessage(message)
  await sleep(0.5)
  return NextResponse.json(dbMessage)
}

const sleep = async (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms * 1000)
  })
}

export { GET, POST }
