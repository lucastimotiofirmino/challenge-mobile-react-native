import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import Theme from './components/Theme';
import Screen from './components/Screen';
import TabNavigation from './components/TabNavigation';

function App() {
  return (
    <Provider store={store}>
      <Theme>
        <Screen>
          <TabNavigation />
        </Screen>
      </Theme>
    </Provider>
  );
}

export default App;
