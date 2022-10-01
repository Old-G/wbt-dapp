import { Flex } from '@chakra-ui/react'
import { useEthers } from '@usedapp/core'
import type { GetStaticProps } from 'next'
import { createClient } from '@supabase/supabase-js'
import Card, { CardProps } from '../components/Card'

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
  const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
  )

  const { data } = await supabaseAdmin.from('posts').select('*').order('id')

  return {
    props: {
      posts: data,
    },
  }
}
