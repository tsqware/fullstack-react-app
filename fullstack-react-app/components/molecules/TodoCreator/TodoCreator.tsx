import React, { FC, useState } from "react"
import { Flex, Heading, IconButton, Input } from "@chakra-ui/react"
import { AddIcon } from "@chakra-ui/icons"
import axios from "axios"

type TodoCreatorProps = {
	onTodoCreated: () => void
}


export const TodoCreator: FC<TodoCreatorProps> = ({ onTodoCreated }) => {
	const [title, setTitle] = useState("")
	const [isLoading, setIsLoading] = useState(false)

	const onCreate = () => {
		setIsLoading(true)
		axios.post("/api/todo", {
			title
		}).then(() => {
			onTodoCreated()
		}).finally(() => {
			setIsLoading(false)
		})
	}

	return (
		<Flex direction="column" mt="40px">
			<Heading fontSize="lg" mb="5px">Create Todo</Heading>
			<Flex direction="row">
				<Input 
					placeholder="Something to do..." 
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<IconButton
					aria-label='Create todo'
					variant="solid"
					colorScheme="blue"
					icon={<AddIcon />}
					onClick={onCreate}
					ml="10px"
					isLoading={isLoading}
				/>
			</Flex>
		</Flex>
	)
}