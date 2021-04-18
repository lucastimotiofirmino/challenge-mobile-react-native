import CryptoJS from 'crypto-js'
import { ApiMarvelPublic } from '../../services'

interface InterfaceThumbnail {
	readonly extension: string
	readonly path: string
}

interface InterfaceGeneric {
	readonly name: string
	readonly resourceURI?: string
}

interface InterfaceReturn {
	readonly name: string
	readonly description: string | null
	readonly thumbnail: InterfaceThumbnail
	readonly comics: InterfaceGeneric[]
	readonly series: InterfaceGeneric[]
	readonly events: InterfaceGeneric[]
}

async function GetSingleCharactes(id: Number | string): Promise<InterfaceReturn> {
	const time = Math.floor(Date.now() / 1000).toString()
	const apiKeyPublic = 'cf5ab59e801cd541798ce6fcf3714201'
	const apiKeyPrivate = '1531722c090ae677bda1436229d25e55a29ff115'
	const hash = CryptoJS.MD5(`${time+apiKeyPrivate+apiKeyPublic}`).toString()

	try {
		const response = await ApiMarvelPublic.get(`characters/${id}?ts=${time}&apikey=${apiKeyPublic}&hash=${hash}`)
		const data = response.data.data.results[0]
		return {
			"name": data.name,
			"description": data.description,
			"thumbnail": {
				"extension": data.thumbnail.extension,
				"path": data.thumbnail.path
			},
			"comics": data.comics.items,
			"series": data.series.items,
			"events": data.events.items
		}
	} catch (error) {
		throw error
	}
}

export default GetSingleCharactes