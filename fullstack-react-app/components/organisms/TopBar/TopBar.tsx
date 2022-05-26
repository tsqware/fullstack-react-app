import { Flex, HStack, Button, Text } from "@chakra-ui/react"
import { MenuItem } from "../../molecules/MenuItem/MenuItem"


export const TopBar = () => {
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
					<Button variant="solid" colorScheme="blue">Get Started</Button>
				</HStack>
			</Flex>
		</Flex>
	)
}