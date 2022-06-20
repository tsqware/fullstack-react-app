import { getSession } from "next-auth/react"
import { PrismaClient } from "@prisma/client"
import { NextApiRequest, NextApiResponse } from "next"
import { Session } from "next-auth"
import { UserSession } from "./auth/[...nextauth]"

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	
	if (req.method !== "POST") {
		res.status(405).json("Method not allowed")
		return
	}

	const session: Session | null = await getSession({req})
	const userSession: UserSession = session as UserSession

	if (!session) {
		res.status(401).send("Unauthorized")
		return
	}

	if (req.method === "POST") {
		console.log(">>> body:", req.body)
		const { title } = req.body
			
		if (!title) {
			res.status(400).send("Bad Request")
			return res.json
		}

		const todo = await prisma.todo.create({
			data: {
				title,
				userId: userSession.userId,
				isCompleted: false
			}
		})
		return res.json(todo)
	}

	//const userSession: UserSession = session as UserSession
	/*const todos = await prisma.todo.findMany({
		where: {
			userId: userSession.userId
		}
	})

	return res.json(todos)*/
	res.status(400).send("Bad Request")
	return res.json
}