import React, {useLayoutEffect} from 'react';
import {HomeStack} from './src/navigation';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import linking from './src/navigation/linking';
import {ActivityIndicator, View} from 'react-native';

const App = () => {
  return (
    <NavigationContainer
      linking={linking}
      fallback={
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator size="large" />
        </View>
      }>
      <Provider store={store}>
        <HomeStack />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
