import React from 'react';


import HeroesList from './src/screens/HeroesList'
import Header from './src/components/Header'

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <>
    <Header/>
    <HeroesList/>
    </>
  );
};

export default App;
