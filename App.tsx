import React from 'react';
import {HomeStack} from './src/navigation';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from './src/redux/store';

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <HomeStack />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
