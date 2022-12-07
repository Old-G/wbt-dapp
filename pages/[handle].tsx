/* pages/profile/[handle].js */
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { client, getPublications, getProfile } from '../api/GraphqlApi'
import Image from 'next/image'
import { Flex, Text } from '@chakra-ui/react'
import { pictureFormate } from '../helpers/pictureFormate'
import BlurImage from '../components/BlurImage'

export default function HandleProfile() {
  /* create initial state to hold user profile and array of publications */
  const [profile, setProfile] = useState()
  const [publications, setPublications] = useState([])
  /* using the router we can get the lens handle from the route param */
  const router = useRouter()
  const { handle } = router.query

  useEffect(() => {
    if (handle) {
      fetchProfile()
    }
  }, [handle])

  async function fetchProfile() {
    try {
      /* fetch the user profile using their handle */
      const returnedProfile = await client.query({
        query: getProfile,
        variables: { handle },
      })
      const profileData = { ...returnedProfile.data.profile }
      /* format their picture if it is not in the right format */
      pictureFormate(profileData)

      setProfile(profileData)
      /* fetch the user's publications from the Lens API and set them in the state */
      const pubs = await client.query({
        query: getPublications,
        variables: {
          id: profileData.id,
          limit: 50,
        },
      })
      setPublications(pubs.data.publications.items)
    } catch (err) {
      console.log('error fetching profile...', err)
    }
  }

  if (!profile) return null

  return (
    <Flex pt='20px' direction='column' justify='center' align='center'>
      <BlurImage src={profile.avatarUrl} alt={'avatar'} />
      <Text className='text-4xl mt-8 mb-8'>{profile.handle}</Text>
      <Text className='text-center text-xl font-bold mt-2 mb-2 w-1/2'>
        {profile.bio}
      </Text>
      {publications.map((pub) => (
        <Flex
          key={pub.id}
          p='10px'
          borderRadius='100%'
          border='1px solid gray.300'
          mb='8px'
          w='2/3'
        >
          <Text>{pub.metadata.content}</Text>
        </Flex>
      ))}
    </Flex>
  )
}
