import { Flex, VStack } from '@chakra-ui/react'
import { useEthers } from '@usedapp/core'
import type { GetStaticProps } from 'next'
import Card, { CardProps } from '../components/Card'
import { supabaseAdmin } from '../utils/supabaseClient'

import { client, exploreProfiles } from '../api/GraphqlApi'
import { useEffect, useState } from 'react'
import { pictureFormate } from '../helpers/pictureFormate'
import Authentication from '../components/Authentication'

type PostsProps = {
  posts: [post: CardProps]
}

const Home = ({ posts }: PostsProps) => {
  // const { activateBrowserWallet, account } = useEthers()
  // console.log(posts)

  const [profiles, setProfiles] = useState([])
  useEffect(() => {
    fetchProfiles()
  }, [])

  async function fetchProfiles() {
    try {
      /* fetch profiles from Lens API */
      let response = await client.query({ query: exploreProfiles })
      /* loop over profiles, create properly formatted ipfs image links */
      let profileData = await Promise.all(
        response.data.exploreProfiles.items.map(async (profileInfo) => {
          let profile = { ...profileInfo }

          pictureFormate(profile)

          return profile
        })
      )

      /* update the local state with the profiles array */
      setProfiles(profileData)
    } catch (err) {
      console.log({ err })
    }
  }

  return (
    <Flex direction='column' alignItems='center'>
      {/* <button onClick={() => activateBrowserWallet()}>Connect</button> */}
      {/* {account && <p>Account: {account}</p>} */}

      <Authentication />

      <VStack direction='column' spacing={8} w='100%' align='center'>
        {profiles?.map((post) => (
          <Card key={post.id} {...post} />
        ))}
      </VStack>
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
