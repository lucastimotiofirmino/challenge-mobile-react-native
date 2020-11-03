import {DarkTheme} from '../../themes';

export default function theme(
  state: Redux.State['theme'] = DarkTheme,
  action: Redux.Action,
): Theme {
  switch (action.type) {
    case 'CHANGE_THEME_TO_LIGHT': {
      const {themeLight} = action.payload;
      return themeLight;
    }
    case 'CHANGE_THEME_TO_DARK': {
      const {themeDark} = action.payload;
      return themeDark;
    }
    default: {
      return state;
    }
  }
}
