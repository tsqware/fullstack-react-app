import axios from "axios"
import { FC, useEffect, useState } from "react"
import { Todos } from "./Todos"

const fetchTodos = async () => {
	const response = await fetch("/api/todos")
	const data = await response.json()
	return data
}

type TodoContainerProps = {
	refreshTodoToken: string
}

export const TodosContainer: FC<TodoContainerProps> = ({refreshTodoToken}) => {
	const [todos, setTodos] = useState([])
	const [completeTodoToken, setCompleteTodoToken] = useState("")
	const [deleteTodoToken, setDeleteTodoToken] = useState("")

	useEffect(() => {
		fetchTodos().then((todos) => setTodos(todos))
	}, [refreshTodoToken, completeTodoToken, deleteTodoToken])

	const onTodoBlur = async (todoId: string, newTitle: string) => {
		axios.put(`/api/todo/${todoId}`, { title: newTitle })
	}

	const onTodoCompleteToggle = async (todoId: string, isCompleted: boolean) => {
		axios.put(`/api/todo/${todoId}`, { isCompleted })
			.finally(() => setCompleteTodoToken(Math.random().toString()))
	}
	const onTodoDelete = async (todoId: string) => {
		axios.delete(`/api/todo/${todoId}`)
			.finally(() => setDeleteTodoToken(Math.random().toString()))
	}


	return (
		<Todos 
			todos={todos} 
			onTodoBlur={onTodoBlur} 
			onTodoCompleteToggle={onTodoCompleteToggle} 
			onTodoDelete={onTodoDelete}
		/>)
}