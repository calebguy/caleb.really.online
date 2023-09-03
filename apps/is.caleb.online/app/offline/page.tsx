import db, { setOffline, setOnline } from "db";
import { redirect } from "next/navigation"; 

export default async function OfflinePage() {
    await setOffline();
    redirect(process.env.OFFLINE_URL)
}