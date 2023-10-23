import { PrismaAdapter } from "@auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google"
import { AuthOptions} from "next-auth";
import { priscaCliente } from "./prisma";

export const authOpitions: AuthOptions=({
    adapter: PrismaAdapter(priscaCliente),
        providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        ],
    
});