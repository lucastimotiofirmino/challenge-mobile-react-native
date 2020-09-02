import CommonModel from '../model/CommonModel'
import iApiMethod from './iApiMethod'
import { apiMarvelLista } from '../util/util'

export default abstract class CommonService<T extends CommonModel> implements iApiMethod<T>  {

    searchData(_: String): Promise<any[]> {
        throw new Error("Method not implemented.")
    }

    async getAll(): Promise<T[]> {
        try {
            const response = await fetch(apiMarvelLista)
            if (!response.ok) {
                throw new Error("Cannot get data")
            }
            return response.json()
        }
        catch (error) {
            throw error
        }
    }

    async fetchById(dix: String): Promise<T | null> {
        try {
            const response = await fetch(apiMarvelLista+ '/' + dix)
            if (!response.ok) {
                throw new Error("Cannot fetch data")
            }
            return response.json()
        }
        catch (error) {
            throw error
        }
    }
}