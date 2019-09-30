/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import SRootScreen from './RootRouter';
import * as Icon from "../utils/IconPaths";
import {SCountdownButton} from '../components';

import Edu from '../pages/Education/Edu';

/**@desc 2019/5/25 可作为倒计时广告*/
class CountDownAD extends Component {

   render() {
      return (
         <View style={styles.container}>
            <Image source={Icon.ad_show} style={styles.adStyle}/>
            <SCountdownButton
               style={styles.timerStyle}
               title={'跳过广告'}
               timeLength={3}
               isAutoCountdown={true}
               onClick={this.skipAD}
               endCountdownFunction={this.endCountdownFunction}
            />
         </View>
      );
   }

   // 跳过广告
   skipAD = ()=>{
      this.props.navigation.navigate('SRootRouter');
   };
   // 结束倒计时
   endCountdownFunction = ()=>{
      this.skipAD();
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: 'white',
   },

   adStyle: {
      flex: 1,
   },

   timerStyle: {
      width: 60,
      height: 60,
      top: statusBarHeight + 10,
      right: 30,
      borderRadius: 40,
      backgroundColor: 'rgba(170, 170, 170, 0.85)'
   }
});



/**@desc 2019/5/24 路由设置*/
export const AppRouter = createAppContainer(
   createSwitchNavigator(
      {
          CountDownAD,
          // Edu,
         "SRootRouter": SRootScreen,
      },

      {
         initialRouteName: 'CountDownAD'
      }
   )
);
