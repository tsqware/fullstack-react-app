import { signIn } from 'next-auth/react'
import { Flex, HStack, Button, Text } from "@chakra-ui/react"
import { MenuItem } from "../../molecules/MenuItem/MenuItem"
import { useRouter } from 'next/router'



export const TopBar = ({user}) => {
	const router = useRouter()

	const goToMembers = (e) => {
		e.preventDefault()
		router.push('/loggedIn')
	}
	
	return (
		<Flex w='100%' flexDirection="row" alignContent="center" alignItems="center" justifyContent="center" p="6px 16px">
			<Flex 
				w={['100%', '100%', '100%', '90ch']} 
				flexDirection="row" 
				alignContent="center"
			>
				<Text fontSize="32px" fontWeight="700" color="#008CDB" flexGrow={1}>SuperApp</Text>
				<HStack spacing="16px" display={["none", "none", "none", "flex"]}>
					<MenuItem text="Blog" href="/blog" />
					<MenuItem text="Product" href="/product" />
					<MenuItem text="Pricing" href="/pricing" />
				</HStack>
				<HStack ml="82px">
					{user && (
						<Button variant="solid" colorScheme="blue" onClick={goToMembers}>Members</Button>
					)}
					{!user && (
						<Button variant="solid" colorScheme="blue" onClick={() => signIn()}>Sign in</Button>
					)}
				</HStack>
			</Flex>
		</Flex>
	)
}

