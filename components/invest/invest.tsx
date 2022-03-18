import React from 'react'
import Image from 'next/image'
import Gradient from 'rgt'

import {
  Flex,
  Text,
  Container,
  VStack,
  Button,
  Box,
  Link,
  useMediaQuery,
} from '@chakra-ui/react'

function Invest() {
  const [isMobile] = useMediaQuery('(max-width: 768px)')

  return (
    <Container maxW={{ base: 'container.md', md: 'container.xl' }} p={0}>
      <Container maxW={{ base: 'container.sm', md: 'container.xl' }} p={0}>
        <Flex
          direction={{ base: 'column-reverse', md: 'row' }}
          py={[0, 10, 20]}>
          <VStack h='full' w='full' p={10} spacing={10} align='flex-start'>
            {!isMobile ? (
              <Image
                src='/images/bank-token.png'
                alt='bankToken'
                height={422}
                width={402}
              />
            ) : (
              <Image
                src='/images/bank-token-mobile.png'
                alt='bankToken'
                height={113}
                width={180}
              />
            )}
          </VStack>
          <VStack spacing={5} align='flex-start'>
            <Text fontWeight={700} fontSize='7xl'>
              BANK
            </Text>
            <Gradient
              dir='top-to-bottom'
              from='#FF1013'
              to='#000000
'>
              <Text fontSize='4xl' fontWeight={700}>
                The Most widely-held Token{' '}
              </Text>
            </Gradient>
            <Text fontWeight={400} lineHeight='22px' fontSize='lg'>
              BANK is the native token of BanklessDAO. As a tool for the
              Bankless community, it determines membership level and voting
              power in on-chain votes. To be a Level 1 member, which means you
              can access the Discord server without needing a guest pass, you
              must hold 35,000 BANK.
            </Text>
            <Container className='border-box' width='458px' height='131px'>
              <Text
                paddingTop={5}
                fontWeight={400}
                lineHeight='22px'
                fontSize='lg'>
                BANK is available on both{' '}
                <Link
                  color='#D02128'
                  href='https://app.uniswap.org/#/swap?inputCurrency=0x2d94aa3e47d9d5024503ca8491fce9a2fb4da198&outputCurrency=ETH&chain=mainnet'
                  isExternal>
                  Uniswap
                </Link>{' '}
                and{' '}
                <Link
                  color='#D02128'
                  href='https://app.sushi.com/swap?inputCurrency=0x2d94aa3e47d9d5024503ca8491fce9a2fb4da198&outputCurrency=ETH'
                  isExternal>
                  Sushiswap
                </Link>{' '}
                and can be earned by working in the DAO. Many guest pass holders
                earn their 35,000 BANK rather than buy it outright.
              </Text>
            </Container>
            <Box>
              <Text>
                Current market cap and price is{' '}
                <Link
                  color='#D02128'
                  href='https://www.coingecko.com/en/coins/bankless-dao'
                  isExternal>
                  Available Here
                </Link>
              </Text>
            </Box>
          </VStack>
        </Flex>
      </Container>
      <Container maxW='container.xl' p={0}>
        <Flex py={20}>
          <VStack spacing={10} align='flex-start'>
            <Container maxW='container.xl'>
              <Text fontWeight={700} fontSize='5xl'>
                BED Index
              </Text>
              <Text lineHeight='22px' fontSize='lg' fontWeight={700}>
                <Gradient
                  dir='top-to-bottom'
                  from='#FF1013'
                  to='#000000
'>
                  The only index that can get ETH and BTC maxis in BED together
                </Gradient>
              </Text>
            </Container>
            <Container maxW='container.xl'>
              <Text fontWeight={400} lineHeight='22px' fontSize='lg'>
                The only index that can get ETH and BTC maxis in BED together
                The Bankless BED Index is a passive investment vehicle weighted
                equally in Bitcoin, Ethereum, and the DeFi Pulse Index (DPI),
                which tracks high-usage DeFi assets. This index gives you
                exposure to crypto without having to research DeFi projects or
                constantly rebalance your portfolio. This is a great first
                crypto investment for anyone just starting their crypto journey.
                The fund is a cooperation between BanklessDAO and Index Coop, a
                provider of DeFi investment products
              </Text>
            </Container>
            <Container display='flex' justifyContent='space-evenly'>
              <Button
                onClick={() =>
                  window.open('https://app.indexcoop.com/bed', '_blank')
                }>
                <Container padding={0} paddingRight={2}>
                  <Image
                    src='/images/bed-token.png'
                    alt='bed-token'
                    height={23}
                    width={23}
                  />
                </Container>
                Invest in BED index
              </Button>
              <Button
                onClick={() =>
                  window.open(
                    'https://www.bankless.community/bed-index',
                    '_blank'
                  )
                }>
                Learn more about Bed Index{' '}
              </Button>
            </Container>
          </VStack>
          <VStack h='full' w='full' p={10} spacing={10} align='flex-end'>
            <Image
              src='/images/bed-token.png'
              alt='bed-token'
              height={454}
              width={454}
            />
          </VStack>
        </Flex>
      </Container>
      <Container maxW='container.lg' p={0}>
        <Flex py={20}>
          <VStack spacing={10}>
            <Container maxW='container.xl'>
              <Text fontWeight={700} fontSize='5xl'>
                GMI INDEX
              </Text>
              <Text
                color={'#D02128'}
                lineHeight='43px'
                fontSize='36px'
                fontWeight={700}>
                Are you GMI?
              </Text>
            </Container>
            <Container maxW='container.xl'>
              <Text fontWeight={400} lineHeight='22px' fontSize='lg'>
                The Bankless DeFi Innovation Index, called the GMI Index for the
                rally cry “we’re all gonna make it” is another investment
                vehicle springing from the Index Coop/BanklessDAO partnership.
                Like the BED Index, GMI captures a broad swath of DeFi exposure
                while also tapping into gains from sophisticated products such
                as yield-bearing tokens.
              </Text>
            </Container>
          </VStack>
          <VStack
            justifyContent={'flex-end'}
            display='flex'
            p={10}
            spacing={10}>
            <Container>
              <Button
                onClick={() =>
                  window.open('https://app.indexcoop.com/gmi', '_blank')
                }>
                <Container display={'flex'} align='center'>
                  <Image
                    src='/images/bed-token.png'
                    alt='bed-token'
                    height={23}
                    width={23}
                  />
                  Invest in GMI Index
                </Container>
              </Button>
            </Container>
          </VStack>
        </Flex>
      </Container>
      <Container maxW='container.xl' p={0}>
        <Flex py={20}>
          <VStack p={10} spacing={10} align='flex-start'>
            <Image
              src='/images/DAO-Punk-Invest.png'
              alt='bankToken'
              height={533}
              width={525}
            />
          </VStack>
          <VStack spacing={10}>
            <Container>
              <Text fontWeight={700} fontSize='5xl' lineHeight='58px'>
                DAO Punks
              </Text>
              <Text fontWeight={400} lineHeight='22px' fontSize='lg'>
                DAOpunks launched in 2021 with the mission of helping to free
                all humans from the soul-sucking drudgery of default world work.
                They do that work through providing grants to those who seek to
                leave the CORPrat life for the meaningful work found in DAOs.
                Holders of a DAOpunk NFT enjoy access to gated channels, but the
                community is open to anyone with an interest in DAOs. In
                addition to grants, the DAOpunks have a newsletter, podcast, and
                merch arm, and are always spinning new ideas into actionable
                content. DAOpunks is at the edge of DAO governance, and is
                pushing the boundaries of where technology meets on-chain voting
                and automatic treasury triggers.
              </Text>
            </Container>
            <Container>
              <Button
                onClick={() =>
                  window.open(
                    'https://opensea.io/collection/daopunksnft',
                    '_blank'
                  )
                }>
                Invest in DAO Punks
              </Button>
            </Container>
          </VStack>
        </Flex>
      </Container>

      <Container maxW='container.xl' p={0}>
        <Flex justifyContent='space-between' py={10}>
          <VStack h='full' w='30%' p={10} spacing={10} align='flex-start'>
            <Text fontWeight={700} fontSize='4xl' lineHeight='43px'>
              Chippi
            </Text>
            <Container
              position='relative'
              display='flex'
              justifyContent='center'
              flexDirection='column'
              className='border-box'
              width='458px'
              height='250px'>
              <Text fontWeight={400} lineHeight='22px' fontSize='lg'>
                Chippi are hand-drawn 1-of-1s from BanklessDAO contributor
                Perchy. These profile pictures (PFPs) are members of the
                Chippiverse, playing a role in “The Future is DAO” storyline.
                Chippi inhabit the Bankless Nation, a series of art pieces
                available as NFTs.
              </Text>
              <Container
                position='absolute'
                bottom={0}
                display='flex'
                justifyContent='center'>
                <Button onClick={() => null}>Invest in Chippi</Button>
              </Container>
            </Container>
          </VStack>
          <VStack p={10} spacing={10}>
            <Text fontWeight={700} fontSize='4xl' lineHeight='43px'>
              BanklessDAO Weekly NFT Showcase
            </Text>
            <Container
              position='relative'
              display='flex'
              justifyContent='center'
              flexDirection='column'
              className='border-box'
              width='458px'
              height='250px'>
              <Text fontWeight={400} lineHeight='22px' fontSize='lg'>
                BanklessDAO is embedded in the creative space of NFTs and a
                champion for artists paving the way in digital art forms. Weekly
                features can be found on BanklessDAO’s Rarible page or the
                Weekly Rollup newsletter.
              </Text>
              <Container
                display='flex'
                position='absolute'
                bottom={0}
                justifyContent='center'>
                <Button
                  onClick={() =>
                    window.open(
                      'https://rarible.com/banklessdao/sale',
                      '_blank'
                    )
                  }>{`Invest in NFT's`}</Button>
              </Container>
            </Container>
          </VStack>
        </Flex>
      </Container>
    </Container>
  )
}

export default Invest
