import CommonService from './../CommonService'
import Deal from '../../model/deal/Deal'
import { apiMarvelSearch } from '../../util/util'

class DealService extends CommonService<Deal> {
    constructor() {
        super()
        this.rootURL = apiMarvelSearch
    }

    async searchData(search: String): Promise<Deal[]> {
        try {
            const response = await fetch(apiMarvelSearch + '&name=' + search)
            if (!response.ok) {
                throw new Error("cannot get data")
            }
            return response.json()
        }
        catch (error) {
            throw error
        }
    }
    
}

export const dealService = new DealService() 
