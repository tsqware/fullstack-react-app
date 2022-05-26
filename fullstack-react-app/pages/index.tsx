import { Flex, VStack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Hero } from '../components/molecules/Hero/Hero'
import { TopBar } from '../components/organisms/TopBar/TopBar'
import { LandingBody } from '../components/organisms/LandingBody/LandingBody'
import { LandingFooter } from '../components/organisms/LandingFooter/LandingFooter'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <Flex flexDirection="column" >
      <Head>
        <title>SuperApp</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

		<TopBar />
		
		<Flex>
			<Hero />
		</Flex>

		<LandingBody />
		<LandingFooter />
    </Flex>
  )
}

export default Home
