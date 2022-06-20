import { Flex, Heading, Input, Text } from "@chakra-ui/react";
import { Todo } from "@prisma/client";
import { SetStateAction, useState } from "react";

type TodosProps = {
	todos: Todo[]
	onTodoBlur: (todoId: string, newTitle: string) => Promise<void>
}

export const Todos: React.FC<TodosProps> = ({todos, onTodoBlur}) => {
	return (
		<>
			<Flex mb="16px" mt="16px" direction="column">
				<Heading size="xl" mt="0px" mb="20px">Todos</Heading>
					
				{!todos.length && (
					<Text fontSize="xl">
						All caught up! There are no Todos for now.
					</Text>
				)}
				{todos.length > 0 && todos.map((todo: Todo) => (
					<Flex key={todo.id} my="10px">
						<Input 
							variant="unstyled" 
							defaultValue={todo.title} 
							onBlur={(e) => {
								if (todo.title === e.target.value) {return}	
								onTodoBlur(todo.id, e.target.value)
							}} 
						/>
					</Flex>
				))}
			</Flex>
		</>
	)
}