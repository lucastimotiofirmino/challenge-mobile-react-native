import styled from 'styled-components/native';
import {metrics, colors} from '../../theme';

export const Wrapper = styled.View`
  justify-content: center;
  align-items: center;
  width: ${metrics.deviceWidth};
  height: ${metrics.deviceHeight};
  background-color: ${colors.light_gray};
`;

export const Thumbnail = styled.Image`
  width: 300px;
  height: 300px;
  resize-mode: contain;
`;


