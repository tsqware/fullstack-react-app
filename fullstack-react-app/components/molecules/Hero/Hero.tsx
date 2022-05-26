import React from "react"
import { Container, Flex, Heading, Text } from "@chakra-ui/react"

export const Hero = () => {
	return (
		<Flex w="100%" background="linear-gradient(90deg, #FEAC5E 0%, #C779D0 49.08%, #4BC0C8 99.95%, rgba(99, 178, 202, 0.0980419) 99.96%, rgba(96, 180, 201, 0.0852696) 99.97%, #4BC0C8 99.98%, #4BC0C8 99.99%);">
			<Container py="64px" maxW={["100%", "100%", "100%", "90ch"]}>
				<Heading fontSize={["48px", "60px"]} lineHeight={1.1}>
					Increase your productivity<br/>
					Make your app in minutes
				</Heading>
				<Text mt="16px" fontSize="24px" lineHeight="64px" color="gray.600">
					Your Full-Stack React app
				</Text>
			</Container>
		</Flex>
	)
}