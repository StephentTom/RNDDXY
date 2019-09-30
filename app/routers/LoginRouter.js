/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React  from 'react';
import {createStackNavigator} from 'react-navigation';
import Login from '../pages/Login/Login';
import Register from '../pages/Login/Register';


const LoginRouter = createStackNavigator(
   {
      Login: {
         screen: Login
      },

      Register: {
         screen: Register
      }
   },

   {
      initialRouteName: 'Login',
      mode: 'card',
      defaultNavigationOptions: ({navigation})=>({
         header: null,
         gesturesEnabled: true,
      })
   }
);

export default LoginRouter;


