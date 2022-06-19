import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github"
import EmailProvider from "next-auth/providers/email"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default NextAuth({
	adapter: PrismaAdapter(prisma),
	providers: [
		GitHubProvider({
			clientId: process.env.GITHUB_CLIENT_ID || '',
			clientSecret: process.env.GITHUB_CLIENT_SECRET || ''
		}),
		EmailProvider({
			server: process.env.EMAIL_SERVER,
			from: process.env.EMAIL_FROM
		})
	],
	callbacks: {
		async redirect({url, baseUrl}) {
			let path = "/loggedIn"
			return baseUrl + path
		}
	},
	session: {
		strategy: "jwt",
		maxAge: 30 * 24 * 60 * 60
	},
	secret: process.env.SECRET
})