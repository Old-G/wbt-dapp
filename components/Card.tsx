import { Badge, Box } from '@chakra-ui/react'
import Link from 'next/link'
import BlurImage from './BlurImage'

export type CardProps = {
  id: number
  href: string
  imageSrc: string
  alt: string
  username: string
  description: string
  price: string
}

const Card = ({
  imageSrc,
  alt,
  href,
  username,
  description,
  price,

  avatarUrl,
  name,
  bio,
  handle,
  stats,
}: CardProps) => {
  return (
    <Box
      maxW='sm'
      borderWidth='1px'
      borderRadius='lg'
      overflow='hidden'
      maxWidth='700px'
      w='full'
    >
      <BlurImage src={avatarUrl} alt={'avatar'} />

      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' colorScheme='teal'>
            New
          </Badge>
          <Box
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            ml='2'
          >
            {bio}
          </Box>
        </Box>

        <Link href={`/${handle}`}>
          <Box
            mt='1'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            noOfLines={1}
          >
            {name}
          </Box>
        </Link>

        <Box>
          {price}
          <Box as='span' color='gray.600' fontSize='sm'>
            $
          </Box>
        </Box>
        <Box>{stats.totalFollowers} followers</Box>
      </Box>
    </Box>
  )
}

export default Card
