import axios from 'axios'
import md5 from 'js-md5'

const publicKey = 'd45c86886e0fc6df20a3f1f6a49bbb86'
const privateKey = '75aaffa53ff6994f7677644fe4d7975dd88c6aff'

const timestamp = Number(new Date())
const hash = md5.create()
hash.update(timestamp + privateKey + publicKey)

const api = axios.create({
  baseURL: `https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&orderBy=name&limit=20&apikey=${publicKey}&hash=${hash.hex()}`
})

export default api