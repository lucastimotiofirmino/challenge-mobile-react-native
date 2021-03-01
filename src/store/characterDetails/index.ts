import entity from './entity'
import ui from './ui'

export const characterDetailsActions = {
  ui: ui.actions,
  entity: entity.actions
}

const characterDetailsReducers = {
  ui: ui.reducer,
  entity: entity.reducer
}

export default characterDetailsReducers
