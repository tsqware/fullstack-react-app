import { Flex, HStack, Button, Text } from "@chakra-ui/react"
import { MenuItem } from "../../molecules/MenuItem/MenuItem"


export const TopBar = () => {
	return (
		<Flex alignContent="center" p="6px 16px">
			<Text fontSize="32px" fontWeight="700" color="#008CDB" flexGrow={1}>SuperApp</Text>
			<HStack spacing="16px">
				<MenuItem text="Blog" href="/blog" />
				<MenuItem text="Product" href="/product" />
				<MenuItem text="Pricing" href="/pricing" />
			</HStack>
			<HStack marginLeft="82px">
				<Button variant="solid" colorScheme="blue">Get Started</Button>
			</HStack>
		</Flex>
	)
}