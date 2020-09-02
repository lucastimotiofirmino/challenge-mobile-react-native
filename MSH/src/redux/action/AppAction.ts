import IAction from './IAction'

export default class AppAction {
    public static readonly GET_DEALS: string = 'AppAction.GET_DEALS'
    public static readonly SET_FAVORITO: string = 'AppAction.SET_FAVORITO'
    public static readonly UNSET_FAVORITO: string = 'AppAction.UNSET_FAVORITO'
    public static readonly DEALS_LOADED: string = 'AppAction.DEALS_LOADED'
    public static readonly SHOW_DEAL_LIST: string = 'AppAction.SHOW_DEAL_LIST'
    public static readonly SHOW_DEAL_DETAIL: string = 'AppAction.SHOW_DEAL_DETAIL'

    public static getDeals = (searchTerm?: string | ''): IAction<String, void> => {
        return {
            payload: searchTerm,
            type: AppAction.GET_DEALS
        }
    }

    public static setCurrentDeal = (dealId: string): IAction<string, void> => {
        return {
            payload: dealId,
            type: AppAction.SHOW_DEAL_DETAIL
        }
    }

    public static unsetCurrentDeal = (): IAction<void, void> => {
        return {
            type: AppAction.SHOW_DEAL_LIST
        }
    }

    public static setFavorito = (favorito: number): IAction<any, void> => {
        return {
            payload: favorito,
            type: AppAction.SET_FAVORITO
        }
    }

    public static unsetFavorito = (favorito: number): IAction<any, void> => {
        return {
            payload: favorito,
            type: AppAction.UNSET_FAVORITO
        }
    }
}
