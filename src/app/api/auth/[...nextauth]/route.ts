import NextAuth from "next-auth"
import { authOpitions } from "@/lib/auth"

const handler = NextAuth(authOpitions);

export {handler as GET, handler as POST};