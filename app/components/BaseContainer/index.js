/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {observer} from 'mobx-react';
import SNavigationBar from '../NavigationBar';

type Props = {
   // 大容器view的style
   style?: any,
   // 内层存放子组件(children)的view的style
   contentViewStyle?: any,

   // 是否需要导航栏(默认false)
   isHiddenNavigationBar?: boolean,
   // 导航栏是否需要返回按钮(默认true)
   isNeedBackButton?: boolean,
   // 自定义导航栏
   navBar?: any,

   ...SNavigationBar.props
};

@observer
export default class BaseContainer extends Component<Props> {

   static defaultProps = {
      isHiddenNavigationBar: false,
      isNeedBackButton: true,
   };

   render() {
      const {style, contentViewStyle, isHiddenNavigationBar} = this.props;

      const marginTop = isHiddenNavigationBar? 0 : navBarHeight;

      return (
         <View style={[styles.container, style]}>
            {/*导航栏*/}
            {!isHiddenNavigationBar && this.renderNavigationBar()}

            {/*存放子组件的view*/}
            <View style={[styles.contentStyle, {marginTop}, contentViewStyle]}>
               {this.renderContentView()}
            </View>
         </View>
      );
   }

   renderNavigationBar = ()=>{
      // ⚠️ TODO ...otherProps 可以一次性把剩余的属性一一写入, otherProps随便命名
      const {navBar, isNeedBackButton, ...otherProps} = this.props;

      let _navBar = null;

      // ⚠️ TODO: BUG==>当外界容器设置了style后, 这里导航栏也会发生改变, 因为...otherProps中包含有style属性, 而框架teaset中NavigationBar设置导航栏的正好也是style这个属性, 因此外界容器设置style会影响导航栏
      if (typeof navBar === 'undefined') {
         _navBar = <SNavigationBar
             isNeedBackButton={isNeedBackButton}
             {...otherProps}
         />
      } else {
         _navBar = navBar
      }

      return _navBar;
   };

   renderContentView = ()=>{
      return this.props.children;
   };
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: colorConfig.bgColor
   },

   contentStyle: {
      flex: 1,
      backgroundColor: colorConfig.bgColor
   }
});
