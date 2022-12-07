import { Container } from '@chakra-ui/react'
import Header from './Header'
import Menu from './Menu'

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Container
      maxWidth='1200px'
      minH='100vh'
      p={'0px'}
      m='0 auto'
      position='relative'
    >
      <Header />
      {children}
      <Menu />
    </Container>
  )
}

export default Layout
