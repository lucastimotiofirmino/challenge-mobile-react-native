import * as React from 'react';
import { FAB, Portal, Provider } from 'react-native-paper';

const MyComponent = (props) => {
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
                props.teste('Nomes')
              },
            },
            {
              icon: 'heart',
              label: 'Favoritos',
              onPress: () => {
                console.log('Pressed Favoritos')
                props.teste('Favoritos')
              },
              small: false,
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

export default MyComponent;