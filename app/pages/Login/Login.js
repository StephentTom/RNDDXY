/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Checkbox, Button} from 'teaset';
import {SBaseContainer} from '../../components';
import LoginInputView from './Views/LoginInputView';
import * as Icon from '../../utils/IconPaths';


type Props = {};

export default class Login extends Component<Props> {

   constructor(props) {
      super(props);

      this.state = {
         checked: true,
      }
   }

   render() {
      const {checked} = this.state;

      return (
         <SBaseContainer
             style={styles.container}
             backButtonOnPress={this.backButtonOnPress}
             title={'React native'}
         >
            <LoginInputView />

            <View style={styles.passwordContainer}>
               <Checkbox activeOpacity={kActiveOpacity} title={'记住密码'} size={'md'} checkedIcon={<Image source={Icon.rpc_sel} />} uncheckedIcon={<Image source={Icon.rpc_def} />} checked={checked} onChange={this.rememberPasswordOnPress}/>

               <Button style={styles.buttonStyle} title={'忘记密码?'} size={'md'} titleStyle={styles.btnTitleStyle} onPress={this.forgetPasswordOnPress}/>
            </View>

            <View style={styles.loginContainer}>
               <Button style={[styles.buttonStyle, {backgroundColor: colorConfig.thinPink}]} activeOpacity={kActiveOpacity} title={'登 录'} titleStyle={{color: 'white', fontSize: 20}} onPress={this.loginOnPress}/>

               <Button style={[styles.buttonStyle, {marginTop: 20}]} activeOpacity={kActiveOpacity} title={'注 册'} titleStyle={{color: colorConfig.thinPink, fontSize: 20}} onPress={this.registerOnPress}/>
            </View>
         </SBaseContainer>
      );
   }

   /*2019-05-30 记住密码**/
   rememberPasswordOnPress = (checked) =>{
      this.setState({
         checked: checked
      });
   };

   /*2019-05-30 忘记密码**/
   forgetPasswordOnPress = ()=>{
      alert('忘记密码')
   };

   /*2019-05-30 登录**/
   loginOnPress = ()=>{
      alert('登录')
   };

   /*2019-05-30 注册**/
   registerOnPress = ()=>{
      this.props.navigation.navigate('Register');
   };

   backButtonOnPress = ()=> {
      this.props.navigation.dismiss();
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },

   passwordContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 25,
      paddingHorizontal: 25,
   },
   buttonStyle: {
      borderColor: 'transparent',
      backgroundColor: colorConfig.bgColor
   },
   btnTitleStyle: {
      color: '#6eabff',
   },

   loginContainer: {
      marginTop: 40,
      paddingHorizontal: 40,
   }
});
