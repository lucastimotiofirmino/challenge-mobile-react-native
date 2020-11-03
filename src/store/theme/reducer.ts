import {LightTheme} from '../../themes';

export default function theme(
  state: Redux.State['theme'] = LightTheme,
  action: Redux.Action,
): Theme {
  switch (action.type) {
    case 'CHANGE_THEME_TO_LIGHT': {
      const {theme: LightTheme} = action.payload;
      return LightTheme;
    }
    case 'CHANGE_THEME_TO_DARK': {
      const {theme: DarkTheme} = action.payload;
      return DarkTheme;
    }
    default: {
      return state;
    }
  }
}
