import { getSession } from "next-auth/react"
import { PrismaClient } from "@prisma/client"
import { NextApiRequest, NextApiResponse } from "next"
import { Session } from "next-auth"
import { UserSession } from "../auth/[...nextauth]"

const prisma = new PrismaClient()

type TodoUpdate = {
	title?: string
	isCompleted?: boolean
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	
	const allowedVerbs = ["PUT", "DELETE"]

	if ( !allowedVerbs.includes(req.method || "") ) {
		res.status(405).json("Method not allowed")
		return
	}

	const session: Session | null = await getSession({req})
	const userSession: UserSession = session as UserSession

	if (!session) {
		res.status(401).send("Unauthorized")
		return
	}

	if (req.method === "PUT") {
		const { todoId } = req.query
		const { title, isCompleted } = req.body

		const updatedData: TodoUpdate = {}
		if (title) updatedData.title = title
		if (isCompleted) updatedData.isCompleted = isCompleted

		const id: string = todoId.toString()

		const todo = await prisma.todo.update({
			where: { id },
			data: updatedData
		})

		return res.json(todo)
	}
	
	res.status(400).send("Bad Request")
	return res.json
}