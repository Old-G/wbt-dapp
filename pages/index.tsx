import { Flex } from '@chakra-ui/react'
import { useEthers } from '@usedapp/core'
import type { GetStaticProps } from 'next'
import Card, { CardProps } from '../components/Card'
import { supabaseAdmin } from '../utils/supabaseClient'

type PostsProps = {
  posts: [post: CardProps]
}

const Home = ({ posts }: PostsProps) => {
  const { activateBrowserWallet, account } = useEthers()
  console.log(posts)

  return (
    <Flex direction='column' alignItems='center'>
      <button onClick={() => activateBrowserWallet()}>Connect</button>
      {account && <p>Account: {account}</p>}

      {posts?.map((post) => (
        <Card key={post.id} {...post} />
      ))}
    </Flex>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async (context) => {
  const { data } = await supabaseAdmin.from('posts').select('*').order('id')

  return {
    props: {
      posts: data,
      revalidate: 10,
    },
  }
}
