import { DeleteIcon } from "@chakra-ui/icons";
import {
  Checkbox,
  Flex,
  Heading,
  IconButton,
  Input,
  Text,
} from "@chakra-ui/react";
import { Todo } from "@prisma/client";

type TodosProps = {
  todos: Todo[]
  onTodoBlur: (todoId: string, newTitle: string) => Promise<void>
  onTodoCompleteToggle: (todoId: string, isCompleted: boolean) => Promise<void>
  onTodoDelete: (todoId: string) => Promise<void>
}

export const Todos: React.FC<TodosProps> = ({
  todos,
  onTodoBlur,
  onTodoCompleteToggle,
  onTodoDelete
}) => {
  return (
    <>
      <Flex mb="16px" mt="16px" direction="column">
        <Heading size="xl" mt="0px" mb="20px">
          Todos
        </Heading>

        {!todos.length && (
          <Text fontSize="xl">All caught up! There are no Todos for now.</Text>
        )}
        {todos.length > 0 &&
          todos.map((todo: Todo) => (
            <Flex key={todo.id} my="4px" alignItems="center" role="group">
              <Input
                variant="unstyled"
                color={todo.isCompleted ? "gray.400" : "gray.700"}
                readOnly={todo.isCompleted}
                textDecoration={todo.isCompleted ? "line-through" : "none"}
                defaultValue={todo.title}
                onBlur={(e) => {
                  if (todo.title === e.target.value) {
                    return;
                  }
                  onTodoBlur(todo.id, e.target.value);
                }}
              />
              <Checkbox
                isChecked={todo.isCompleted}
					 ml="8px"
                onChange={(e) =>
                  onTodoCompleteToggle(todo.id, e.target.checked)
                }
              />
              <IconButton
                icon={<DeleteIcon />}
                aria-label="Delete todo"
					 variant="ghost"
					 size="md"
					 ml="8px"
					 colorScheme="red"
					 onClick={() => onTodoDelete(todo.id)}
					 opacity={0}
					 visibility={todo.isCompleted ? "hidden" : "visible"}
					 _groupHover={{ opacity: 1 }}
              />
            </Flex>
          ))}
      </Flex>
    </>
  );
};
