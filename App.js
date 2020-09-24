/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {useEffect} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import VendorList from './src/screens/vendorList/vendorList';
import VendorInfo from './src/screens/vendorInfo/vendorInfo';
import VendorEvent from './src/screens/vendorEvent/vendorEvent';

import mainReducer from './src/reducers/mainReducer';
import thunk from 'redux-thunk';

const Stack = createStackNavigator();
const store = createStore(mainReducer, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="vendorList"
            component={VendorList}
            options={{
              headerStyle: {backgroundColor: '#000000'},
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              title: 'Vendors',
            }}
          />
          <Stack.Screen
            name="vendorInfo"
            component={VendorInfo}
            options={{
              headerStyle: {backgroundColor: '#000000'},
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              title: 'Vendor Information',
            }}
          />
           <Stack.Screen
            name="vendorEvent"
            component={VendorEvent}
            options={{
              headerStyle: {backgroundColor: '#000000'},
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              title: 'Vendor Event',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
