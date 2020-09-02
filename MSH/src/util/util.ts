import md5 from 'js-md5'

export const priceDisplay = (priceInCents: number) => {
  return `$${priceInCents / 100}`
}

const PUBLIC_KEY = 'ae2b9458b5a295f0654f514415199b65'
const PRIVATE_KEY = '9e4c7372be2bf226ca1efe8a7b87262711623065'

const timestamp = Number(new Date())
const hash = md5.create()
hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY)

export const apiMarvelLista = `https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&orderBy=name&limit=25&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`

export const apiMarvelSearch = `https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&orderBy=name&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`