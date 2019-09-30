/**
 * @author Mr.Hong
 */

import React, {PureComponent} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {withNavigation} from 'react-navigation';
import PropTypes from 'prop-types';
import * as Icon from '../../../utils/IconPaths';


const isLogin = false;

class MeHeader extends PureComponent {

    static propTypes = {
      headerIconStr: PropTypes.string,
      nickname: PropTypes.string
   };

    static defaultProps = {
        nickname: '***'
    };

    render() {
        const {headerIconStr, nickname} = this.props;
        let _headerIconStr = headerIconStr? {url: headerIconStr} : Icon.head_placeholder;

        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={[styles.headerStyle, {marginTop: 50}]}
                    activeOpacity={kActiveOpacity}
                    onPress={this.headerOnPress}
                >
                    <Image style={styles.headerStyle} source={_headerIconStr}/>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.sysStyle}
                    activeOpacity={kActiveOpacity}
                    onPress={this.sysOnPress}
                >
                    <Image style={{width: 20, height: 20}} source={Icon.me_sysMsg}/>
                </TouchableOpacity>

                <Text style={styles.textStyle}>{nickname}</Text>
                <Text style={styles.textStyle}>游客</Text>
            </View>
        );
    }

    headerOnPress = ()=> {
        const {navigation} = this.props;
        isLogin? navigation.navigate('MyAccount') : navigation.navigate('Login');
    };

    sysOnPress = ()=>{
        const {navigation} = this.props;
        isLogin? navigation.navigate('SystemMsg') : navigation.navigate('Login');
    }
}

const styles = StyleSheet.create({
    container: {
        height: kMeHeadHeight,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },

    sysStyle: {
        width: 20,
        height: 20,
        position: 'absolute',
        top: statusBarHeight + 15,
        right: 25,
    },

    headerStyle: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },

    textStyle: {
        marginTop: 10,
        fontSize: 15,
        textAlign: 'center'
    },

});

export default withNavigation(MeHeader);