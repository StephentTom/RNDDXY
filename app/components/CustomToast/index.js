/**
 * @Author Mr.Hong
 * @Date 2019/05/29
 * @Project WebStorm
 */

import React from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';

type Props = {
    style?: any
}

const CustomToast = (props: Props)=>{
    const {style} = props;

    return (
        <View style={[styles.container, style]}>
            <ActivityIndicator size={'large'} color={'white'}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CustomToast;