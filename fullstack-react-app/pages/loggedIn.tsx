import { Button, Center, Container, Flex, Text } from "@chakra-ui/react";
import { getSession, signOut } from "next-auth/react"

const LoggedPage = ({ session }) => {
	let userName = session.user.name != null ? session.user.name : session.user.email
	return (
		<Container py="64px">
			<Center>
				<Flex flexDirection="column">
					<Text mb="24px">Welcome, {userName}!</Text>
					<Button onClick={() => signOut()}>Sign out</Button>
				</Flex>
			</Center>
		</Container>)
}

export const getServerSideProps = async ({req, res}) => {
	const session = await getSession({req})
	
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