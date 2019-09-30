/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {PureComponent} from 'react';
import {StyleSheet} from 'react-native';
import PropType from 'prop-types';
import {withNavigation} from 'react-navigation';
import {NavigationBar} from 'teaset';


type Props = {
   // 导航栏是否需要返回按钮(默认true)
   isNeedBackButton?: boolean,
   // 拦截左侧返回按钮事件(默认返回 goBack())
   backButtonOnPress?: PropType.func,
   // 导航栏左侧组件
   leftView?: any,
   // 标题style
   titleStyle?: any,

   ...NavigationBar.props
};

class SNavigationBar extends PureComponent<Props> {

   static defaultProps = {
      isNeedBackButton: true
   };

   render() {
      const {titleStyle} = this.props;

      return (
         <NavigationBar
            leftView={this.renderLeftView()}
            titleStyle={[styles.titleDefStyle, titleStyle]}
            {...this.props}
         />
      );
   }

   renderLeftView = ()=>{
      const {isNeedBackButton, leftView} = this.props;

      let _leftView = null;

      if (isNeedBackButton) {
         _leftView = <NavigationBar.BackButton style={{marginLeft: 8}} title={null} onPress={this.backButtonEvent} />
      } else {
         _leftView = leftView;
      }

      return _leftView;
   };

   backButtonEvent = ()=>{
      const {backButtonOnPress} = this.props;

      if (backButtonOnPress) {
         backButtonOnPress();
      } else {
         // goBack() --> 'card'; dismiss() --> 'modal';
         this.props.navigation.goBack();
      }
   }
}

const styles = StyleSheet.create({
   titleDefStyle: {
      fontSize: isIOS? 23 : 20,
      fontWeight: 'bold',
   },
});

export default withNavigation(SNavigationBar);
