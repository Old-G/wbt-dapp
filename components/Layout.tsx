import { Container } from '@chakra-ui/react'

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Container maxWidth='1200px' minH='100vh' p={'0px'} m='0 auto'>
      {children}
    </Container>
  )
}

export default Layout
