import { Flex, Text } from "@chakra-ui/react";
import { Todo } from "@prisma/client";

type TodosProps = {
	todos: Todo[]
}

export const Todos: React.FC<TodosProps> = ({todos}) => {
	return (
		<>
			<Flex mb="16px" mt="16px">
				{!todos.length && (
					<Text fontSize="xl">
						All caught up! There are no Todos for now.
					</Text>
				)}
				{todos.length > 0 && todos.map((todo: Todo) => (
					<Text fontSize="xl" key={todo.id}>
						{todo.title}
					</Text>
				))}
			</Flex>
		</>
	)
}