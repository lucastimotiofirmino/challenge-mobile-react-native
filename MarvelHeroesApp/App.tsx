import React from 'react';

import HeroesList from './src/screens/HeroesList';
import Header from './src/components/Header';
import Search from './src/components/Search';


declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <>
      <Header />
      <HeroesList/>
    </>
  );
};

export default App;
