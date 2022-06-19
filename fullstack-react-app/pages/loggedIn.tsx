import { Button, Center, Container, Flex, Heading, Text } from "@chakra-ui/react";
import { getSession, signOut } from "next-auth/react"
import { TodosContainer } from "../components/organisms/Todos/TodosContainer";
import { UserSession } from "./api/auth/[...nextauth]";
import { GetServerSideProps } from "next";


const LoggedPage = ({ session }: { session: UserSession}) => {
	let userName = session?.user?.name ||  session?.user?.email
	return (
		<Container py="64px">
			<Center>
				<Flex flexDirection="column">
					<Text mb="24px">Welcome, {userName}!</Text>
					<Button onClick={() => signOut()}>Sign out</Button>

					{/* list of todos */}
					<Heading size="xl" mt="40px" mb="0px">Todos</Heading>
					<TodosContainer />
				</Flex>
			</Center>
		</Container>)
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
	const session = await getSession({ req })
	
	if (!session) {
		return {
			redirect: {
				destination: '/',
				permanent: false
			}
		}
	}
	return {
		props: {
			session
		}
	}
}

export default LoggedPage