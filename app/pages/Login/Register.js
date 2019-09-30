/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SBaseContainer} from '../../components';

type Props = {};


export default class Register extends Component<Props> {
   render() {
      return (
         <SBaseContainer
             style={styles.container}
             title={'注册'}
             contentViewStyle={{justifyContent: 'center'}}
         >
            <Text style={styles.welcome}>
               Welcome to React Native! -- Register
            </Text>
         </SBaseContainer>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
   welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
   },
});
