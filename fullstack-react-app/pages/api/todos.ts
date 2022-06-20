import { getSession } from "next-auth/react"
import { PrismaClient } from "@prisma/client"
import { NextApiRequest, NextApiResponse } from "next"
import { Session } from "next-auth"
import { UserSession } from "./auth/[...nextauth]"

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	
	if (req.method !== "GET") {
		res.status(405).json("Method not allowed")
		return
	}

	const session: Session | null = await getSession({req})

	if (!session) {
		res.status(401).send("Unauthorized")
		return
	}
	
	const userSession: UserSession = session as UserSession
	const todos = await prisma.todo.findMany({
		where: {
			userId: userSession.userId
		},
		orderBy: [
			{
				isCompleted: "asc"
			},
			{
				updatedAt: "desc"
			}
		]
	})

	return res.json(todos)
}