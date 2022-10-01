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
      <Link href={href}>
        <BlurImage src={imageSrc} alt={alt} />
      </Link>

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
            {description}
          </Box>
        </Box>

        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={1}
        >
          {username}
        </Box>

        <Box>
          {price}
          <Box as='span' color='gray.600' fontSize='sm'>
            $
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Card
