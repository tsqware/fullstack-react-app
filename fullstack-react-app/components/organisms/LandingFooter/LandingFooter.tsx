import { Box, Container, Flex, HStack, SimpleGrid, Text } from "@chakra-ui/react"

export const LandingFooter = () => {
	return (
		<Flex 
			as="footer" 
			backgroundColor="blue.400" 
			py="40px"
			width="100vw"
		>
			<Container maxWidth={["100%", "100%", "100%", "90ch"]}>
				<SimpleGrid columns={2} spacing={8}>
					<Box>SuperApp 2021</Box>
					<Flex flexDirection="column">
						<Text mb="16px">Follow us on</Text>
						<HStack spacing={5}>
							<Text>Twitter</Text>
							<Text>Instagram</Text>
							<Text>Facebook</Text>
						</HStack>
					</Flex>
				</SimpleGrid>
			</Container>
		</Flex>
	)
}