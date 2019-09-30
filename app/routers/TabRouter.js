/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import Campus from '../pages/Campus/Campus';
import Circle from '../pages/Circle/Circle';
import Plus from "../pages/Plus/Plus";
import Edu from '../pages/Education/Edu';
import Me from '../pages/Me/Me';
import MyAccount from '../pages/Me/MyAccount';
import SystemMsg from '../pages/Me/SystemMsg';

import * as Icon from "../utils/IconPaths";
import '../utils/Global';


const sTabBarOptions = (tabBarItemTitle, tabBarItemDef, tabBarItemSel) =>{
   const tabBarLabel = tabBarItemTitle;
   const tabBarIcon = ({ focused, horizontal, tintColor })=> {
      return !focused? <Image style={styles.tabBarIconStyle} source={tabBarItemDef}/> : <Image style={styles.tabBarIconStyle} source={tabBarItemSel}/>
   };

   return {tabBarLabel, tabBarIcon};
};


const TabBarNavigator = createBottomTabNavigator(
   {
      Campus: {
         screen: Campus,
         navigationOptions: ()=>sTabBarOptions('校园', Icon.tabBarItem_campus_def, Icon.tabBarItem_campus_sel)
      },

      Circle: {
         screen: Circle,
         navigationOptions: ()=>sTabBarOptions('圈子', Icon.tabBarItem_circle_def, Icon.tabBarItem_circle_sel)
      },

      // 占位组件, 但screen必须设置(否则报红)
      PlaceholderComponent: {
         screen: Plus,
      },

      Edu: {
         screen: Edu,
         navigationOptions: ()=>sTabBarOptions('教学', Icon.tabBarItem_edu_def, Icon.tabBarItem_edu_sel)
      },

      Me: {
         screen: Me,
         navigationOptions: ()=>sTabBarOptions('我', Icon.tabBarItem_me_def, Icon.tabBarItem_me_sel)
      },
   },

   {
      initialRouteName: 'Campus',
      lazy: true,
      // 此处设置的属性是控制全局, 而非某个局部组件
      defaultNavigationOptions: ({navigation})=>({
         tabBarOptions: {
            inactiveTintColor: colorConfig.grayColor,
            activeTintColor: colorConfig.themeColor,
            labelStyle: {
               fontSize: 13.5,
               marginTop: 3.5
            },
            tabStyle: {
               marginTop: 5
            }
         }
      })
   }
);

const TabStackNavigator = createStackNavigator(
    {
       Tab: {
          screen: TabBarNavigator
       },
       MyAccount: {
          screen: MyAccount
       },
       SystemMsg: {
          screen: SystemMsg
       },
    },

    {
       initialRouteName: 'Tab',
       mode: "card",
       defaultNavigationOptions: ({navigation})=>({
          header: null,
          gesturesEnabled: true,
       })
    }
);

/**@desc 2019/5/25 独自设置 占位tabBarItem*/
Plus.navigationOptions = ({navigation}) =>{
   // tabBarButtonComponent: 它包装图标和标签并实现onPress; 重写此属性
   const tabBarButtonComponent: any = (props: any)=>{
      return <TouchableOpacity
         {...props}
         style={styles.plusTabBarItemStyle}
         activeOpacity={1}
         key={'tabBar'}
         // 拦截点击事件, 点击后的selectedIndex保持原来的值
         onPress={()=>navigation.navigate('Plus')}
      >
         <Image style={{width: 35, height: 35}} source={Icon.tabBarItem_plus}/>
      </TouchableOpacity>;
   };

   return {tabBarButtonComponent}
};


const styles = StyleSheet.create({
   tabBarIconStyle: {
      width: 22,
      height: 22
   },

   plusTabBarItemStyle: {
      width: kScreenWidth / tabBarItemCount,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 5
   }
});

export default TabStackNavigator;



