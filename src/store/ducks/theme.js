import Themes from '~/theme/themes';

const Types = {
  TOOGLE_THEME: 'TOOGLE_THEME',
};

const INITIAL_STATE = {
  theme: Themes.light,
};

export default function reducer(state = INITIAL_STATE, action) {
  const { type } = action;

  switch (type) {
    case Types.TOOGLE_THEME:
      return {
        theme: state.theme === Themes.light ? Themes.dark : Themes.light,
      };
    default:
      return state;
  }
}

export const toogleTheme = () => ({
  type: Types.TOOGLE_THEME,
});
