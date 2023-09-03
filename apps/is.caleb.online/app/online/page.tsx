import db, { setOnline } from "db";
import { redirect } from "next/navigation"; 

export default async function OnlinePage() {
    await setOnline();
    redirect(process.env.ONLINE_URL)
}