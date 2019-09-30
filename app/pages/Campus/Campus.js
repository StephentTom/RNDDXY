/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
   Platform,
   StyleSheet,
   Text,
   View
} from 'react-native';
import * as MeServer from '../../servers/Me';


const instructions = Platform.select({
   ios: 'Press Cmd+R to reload,\n' +
      'Cmd+D or shake for dev menu',
   android: 'Double tap R on your keyboard to reload,\n' +
      'Shake or press menu button for dev menu',
});

type Props = {};

export default class Campus extends Component<Props> {
   render() {
      return (
         <View style={styles.container}>
            <Text style={styles.welcome} onPress={this.jsonOnPress}>
               Welcome to React Native! -- Campus
            </Text>
            <Text style={styles.instructions}>
               To get started, edit App.js
            </Text>
            <Text style={styles.instructions}>
               {instructions}
            </Text>
         </View>
      );
   }

   jsonOnPress = ()=>{
      MeServer.getMeListData(userTypes.visitor)
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
   },
   welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
   },
   instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
   },
});
