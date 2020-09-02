import CommonModel from "../CommonModel"

export declare type Deals = Deal[]

export declare type UDeal = Deal | undefined

export default interface Deal extends CommonModel {
    id: number
    description: string
    name: string
    thumbnail: {
        path: string,
        extension: string
    }
    resourceURI:string
}

