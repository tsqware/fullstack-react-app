import { Box, Container, Flex, ListItem, SimpleGrid, Text, UnorderedList } from "@chakra-ui/react"
import React from "react"

export const LandingBody = () => {
	return (
		<Container minHeight="300px">
			<SimpleGrid columns={2} spacing={10} p="64px 24px">
				<Box>
					<Box 
						backgroundColor="gray.300" 
						width="100%" 
						height="225px" 
						borderRadius="16px"
					></Box>
				</Box>
				<Flex flexDirection="column" justifyContent="center">
					<Text mb="8px">Market-standard technology stack</Text>
					<UnorderedList>
						<ListItem>Next.js</ListItem>
						<ListItem>ChakraUI</ListItem>
						<ListItem>Postgres</ListItem>
					</UnorderedList>
				</Flex>
			</SimpleGrid>
		</Container>
	)
	
}