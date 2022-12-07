import { Avatar, Flex } from '@chakra-ui/react'
import Link from 'next/link'
import React, { useState } from 'react'

const Menu = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  const handleOpenMenu = () => {
    setIsOpenMenu(!isOpenMenu)
  }

  return (
    <Flex
      direction='column'
      align='end'
      position='fixed'
      right='50px'
      bottom='35px'
    >
      {isOpenMenu && (
        <Link href='profile'>
          <Avatar
            name='Old G'
            // src='https://bit.ly/dan-abramov'
            size='lg'
            cursor='pointer'
          />
        </Link>
      )}
      <Flex
        cursor='pointer'
        fontSize='32px'
        fontWeight={600}
        onClick={handleOpenMenu}
        mt={isOpenMenu ? '20px' : '0px'}
        transform={isOpenMenu ? 'rotate(0deg)' : 'rotate(3.1416rad)'}
        transition='0.5s easy-in-out'
      >
        W
      </Flex>
    </Flex>
  )
}

export default Menu
