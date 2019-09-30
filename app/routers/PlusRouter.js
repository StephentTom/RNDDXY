/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {createStackNavigator} from 'react-navigation';
import Plus from "../pages/Plus/Plus";


const PlusRouter = createStackNavigator(
   {
      Plus: {
         screen: Plus
      }
   },

   {
      initialRouteName: 'Plus',
      mode: 'card',
      defaultNavigationOptions: ({navigation})=>({
         header: null,
         gesturesEnabled: true
      })
   }
);

export default PlusRouter;
