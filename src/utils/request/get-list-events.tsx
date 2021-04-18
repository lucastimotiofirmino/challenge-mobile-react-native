import CryptoJS from 'crypto-js'
import { ApiMarvelPublic } from '../../services'

interface InterfaceReturn {
	readonly id: number | string
	readonly title: string | null
}

async function GetListEvents(offset: Number): Promise<InterfaceReturn[]> {
	const time = Math.floor(Date.now() / 1000).toString()
	const apiKeyPublic = 'cf5ab59e801cd541798ce6fcf3714201'
	const apiKeyPrivate = '1531722c090ae677bda1436229d25e55a29ff115'
	const hash = CryptoJS.MD5(`${time+apiKeyPrivate+apiKeyPublic}`).toString()

	try {
		const response = await ApiMarvelPublic.get(`events?orderBy=name&limit=20&offset=${offset}&ts=${time}&apikey=${apiKeyPublic}&hash=${hash}`)
		const results = response.data.data.results
		const data: InterfaceReturn[] = []

		for(let index = 0; index < results.length; index++) {
			data.push({
				"id": results[index].id,
				"title": results[index].title
			})
		}

		return data
	} catch (error) {
		throw error
	}
}

export default GetListEvents