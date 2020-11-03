export function changeThemeToLight(theme: Theme) {
  return {
    type: 'CHANGE_THEME_TO_LIGHT',
    payload: {
      theme,
    },
  };
}

export function changeThemeToDark(theme: Theme) {
  return {
    type: 'CHANGE_THEME_TO_DARK',
    payload: {
      theme,
    },
  };
}
