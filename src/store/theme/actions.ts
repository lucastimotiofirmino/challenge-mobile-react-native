export function changeThemeToLight(themeLight: Theme) {
  return {
    type: 'CHANGE_THEME_TO_LIGHT',
    payload: {
      themeLight,
    },
  };
}

export function changeThemeToDark(themeDark: Theme) {
  return {
    type: 'CHANGE_THEME_TO_DARK',
    payload: {
      themeDark,
    },
  };
}
