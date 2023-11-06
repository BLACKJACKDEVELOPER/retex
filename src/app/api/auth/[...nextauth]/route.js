import NextAuth from "next-auth";
import { OPTIONS } from "@/lib/AuthOption";


const handler = NextAuth(OPTIONS)
export { handler as GET , handler as POST }