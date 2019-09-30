/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {createStackNavigator} from 'react-navigation';
import STabScreen from './TabRouter';
import SLoginScreen from './LoginRouter';
import SPlusScreen from './PlusRouter';


const RootRouter = createStackNavigator(
   {
      Tab: {
         screen: STabScreen
      },

      Login: {
         screen: SLoginScreen
      },

      Plus: {
         screen: SPlusScreen
      }
   },

   {
      initialRouteName: 'Tab',
      mode: "modal",
      defaultNavigationOptions: ({navigation})=>({
         header: null,
         gesturesEnabled: false,
      })
   }
);


export default RootRouter;


