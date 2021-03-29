import styled from 'styled-components';

import Marvel from '~/assets/images/logos/marvel_logo_2.png';

const APP_BAR_HEIGHT = 58;

export const Container = styled.View`
  height: ${APP_BAR_HEIGHT}px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding-left: 16px;
`;

export const MarvelLogo = styled.Image.attrs({
  source: Marvel,
  tintColor: 'black',
  resizeMode: 'contain',
})`
  height: 100px;
  width: 100px;
`;
