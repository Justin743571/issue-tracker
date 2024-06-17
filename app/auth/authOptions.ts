import prisma from "@/prisma/client";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";




const authOptions:NextAuthOptions ={
    adapter: PrismaAdapter(prisma),
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!
      })
    ],
    session: {
      strategy: 'jwt'
    },
    callbacks: {
      async redirect({ url, baseUrl }) {
        // For Vercel deployment
        return process.env.NEXTAUTH_URL || baseUrl;
      },
    },
  }

export default authOptions