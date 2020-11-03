import React from 'react';
import {Provider} from 'react-redux';
import TabNavigation from './components/TabNavigation';
import Theme from './components/Theme';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Theme>
        <TabNavigation />
      </Theme>
    </Provider>
  );
}

export default App;
