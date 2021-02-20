import React from 'react';
import {View, ActivityIndicator} from 'react-native';

import AppRoutes from './route.app';

const Routes: React.FC = () => {
  const loading = false;

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#333" />
      </View>
    );
  }

  return <AppRoutes/>;
};

export default Routes;
