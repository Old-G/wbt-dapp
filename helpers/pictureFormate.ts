export const pictureFormate = (query: {
  picture: { original: { url: string } }
  avatarUrl: string
}) => {
  const picture = query.picture
  if (picture && picture.original && picture.original.url) {
    if (picture.original.url.startsWith('ipfs://')) {
      let result = picture.original.url.substring(
        7,
        picture.original.url.length
      )
      return (query.avatarUrl = `http://lens.infura-ipfs.io/ipfs/${result}`)
    } else {
      return (query.avatarUrl = query.picture.original.url)
    }
  }
}
