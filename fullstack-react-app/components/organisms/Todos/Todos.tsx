import { Checkbox, Flex, Heading, Input, Text } from "@chakra-ui/react";
import { Todo } from "@prisma/client";

type TodosProps = {
	todos: Todo[]
	onTodoBlur: (todoId: string, newTitle: string) => Promise<void>
	onTodoCompleteToggle: (todoId: string, isCompleted: boolean) => Promise<void>
}

export const Todos: React.FC<TodosProps> = ({todos, onTodoBlur, onTodoCompleteToggle}) => {
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
							color={todo.isCompleted ? "gray.400" : "gray.700"}
							readOnly={todo.isCompleted}
							textDecoration={todo.isCompleted ? "line-through" : "none"}
							defaultValue={todo.title} 
							onBlur={(e) => {
								if (todo.title === e.target.value) {return}	
								onTodoBlur(todo.id, e.target.value)
							}} 
						/>
						<Checkbox 
							isChecked={todo.isCompleted} 
							onChange={(e) => onTodoCompleteToggle(todo.id, e.target.checked)} 
						/>
					</Flex>
				))}
			</Flex>
		</>
	)
}