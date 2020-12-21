/**
 * @format
 */

import 'react-native';
import React from 'react';

import DetailModal from '../src/components/DetailModal';
import Header, {HeaderTypes} from '../src/components/Header';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(
    <DetailModal
      description={'description'}
      onCloseModal={() => null}
      thumbImage={
        'https://cdn.discordapp.com/attachments/456493454114160651/777869564041756742/image0.png'
      }
      title={'Title'}
    />,
  );
});

it('renders correctly', () => {
  renderer.create(
    <Header
      type={HeaderTypes.home}
      getInputText={() => null}
      onEndInput={() => null}
      onPressBack={() => null}
      onPressSearch={() => null}
    />,
  );
});
