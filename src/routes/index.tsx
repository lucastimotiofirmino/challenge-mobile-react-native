import React, { useEffect, useState } from 'react';
import AppRoutes from './app.routes';
import {ActivityIndicator, View} from 'react-native';

// import {useAuth} from '../hooks/auth';
import Header from '../components/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useDispatch} from 'react-redux'
import { loadFavorites } from '../store/actions/favorites';

const Routes: React.FC = () => {
const dispatch = useDispatch()

useEffect(() => {
  async function loadProducts(): Promise<void> {
    const storagedHeroes = await AsyncStorage.getItem(
      "@marvel"
    );

    if (storagedHeroes) {
      console.log(storagedHeroes.length)
      dispatch(loadFavorites([...JSON.parse(storagedHeroes)]))
    }
  }

  loadProducts();
}, []);
  return (
    <>
      <Header />
      <AppRoutes />
    </>
  );
//   ) : (
//     <AuthRoutes />
//   );
};

export default Routes;
