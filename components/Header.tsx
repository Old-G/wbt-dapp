import { Box, Flex, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <Flex justify='space-between' align='center' p={6}>
      <Link href='/'>
        <Text cursor='pointer'>WBT</Text>
      </Link>
    </Flex>
  )
}

export default Header
