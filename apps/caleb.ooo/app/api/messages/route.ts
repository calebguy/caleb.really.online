import { createNewOfflineMessage, getOfflineMessages } from "db"
import { NextResponse } from "next/server"

const GET = async () => {
  const messages = await getOfflineMessages()
  return NextResponse.json(messages)
}

const POST = async (req: Request) => {
  const { message } = await req.json()
  const dbMessage = await createNewOfflineMessage(message)
  return NextResponse.json(dbMessage)
}

export { GET, POST }
