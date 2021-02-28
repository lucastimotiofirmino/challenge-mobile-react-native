import entity from './entity'
import ui from './ui'

export const charactersActions = {
  ui: ui.actions,
  entity: entity.actions
}

const charactersReducers = {
  ui: ui.reducer,
  entity: entity.reducer
}

export default charactersReducers
