import HomePage from "@/components/HomePage";
import { getOfflineMessages } from "db";

export default async function Page() {
  const messages = await getOfflineMessages()
  return (
      <HomePage messages={messages}/>
  );
}
