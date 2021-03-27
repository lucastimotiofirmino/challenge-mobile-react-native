import * as React from 'react';
import { FAB, Portal, Provider } from 'react-native-paper';

const Filter = (props) => {
  const [state, setState] = React.useState({ open: false });

  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;

  return (
    <Provider>
      <Portal>
        <FAB.Group
          open={open}
          icon={open ? 'close' : 'filter-variant'}
          actions={[
            {
              icon: 'account',
              label: 'Nomes',
              onPress: () => {
                console.log('Pressed Nomes')
                props.funcSetFiltro('Nomes')
              },
            },
            {
              icon: 'heart',
              label: 'Favoritos',
              onPress: () => {
                console.log('Pressed Favoritos')
                props.funcSetFiltro('Favoritos')
              },
              // small: false,
            },
          ]}
          onStateChange={onStateChange}
          onPress={() => {
            if (open) {
              // do something if the speed dial is open
            }
          }}
        />
      </Portal>
    </Provider>
  );
};

export default Filter;