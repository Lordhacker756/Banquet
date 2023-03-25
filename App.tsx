import React from 'react';
import {HomeStack} from './src/navigation';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import linking from './src/navigation/linking';

const App = () => {
  return (
    <NavigationContainer linking={linking}>
      <Provider store={store}>
        <HomeStack />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
