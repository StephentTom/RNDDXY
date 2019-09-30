/**
 * @Author Mr.Hong
 * @Date 2019/05/30
 * @Project WebStorm
 */

import React, {Component} from 'react';
import {Image, StyleSheet, View, TouchableOpacity, Animated, FlatList, LayoutAnimation} from 'react-native';
import {ListRow, Input} from 'teaset';
import PropTypes from 'prop-types';
import * as Icon from '../../../utils/IconPaths';

type Props = {};

const itemHeight = 40;
const maxFlatListHeight = itemHeight * 5;
const accountListTemp = [
    {account: 13300000000, password: '123456'},
    {account: 13300000001, password: '123456'},
    {account: 13300000002, password: '123456'},
];

export default class LoginInputView extends Component<Props> {

    static propTypes = {
        defaultAccount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        defaultPassword: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        accountList: PropTypes.array,
    };

    static defaultProps = {
        accountList: []
    };

    constructor(props) {
        super(props);

        this.state = {
            isExpand: false,
            listHeight: 0,
            defaultAccount: this.props.defaultAccount,
            defaultPassword: this.props.defaultPassword
        }
    }

    render() {
        const {isExpand, listHeight, defaultAccount, defaultPassword} = this.state;
        const {accountList} = this.props;
        const iconSource = !isExpand? Icon.up_fold : Icon.down_fold;
        const height = listHeight >= maxFlatListHeight? maxFlatListHeight : accountListTemp.length * itemHeight;

        return (
            <View style={styles.container}>
                <ListRow style={styles.listRowStyle} detail={
                        <Input
                            style={styles.inputStyle}
                            size='md'
                            defaultValue={defaultAccount}
                            placeholder='请输入账号'
                            onChangeText={text => console.log(text)}
                        />
                    }
                    accessory={
                        <TouchableOpacity
                            style={styles.accessoryStyle}
                            activeOpacity={kActiveOpacity}
                            onPress={this.accountViewOnPress}
                        >
                            <Image source={iconSource} />
                        </TouchableOpacity>
                    } bottomSeparator={'full'}
                />
                {isExpand && <Animated.FlatList
                    style={{maxHeight: height}}
                    data={accountListTemp}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index)=>`${item.account}-${index}`}
                />}
                <ListRow style={[styles.listRowStyle, {marginTop: 20}]} detail={
                    <Input
                        style={styles.inputStyle}
                        size='md'
                        defaultValue={defaultPassword}
                        placeholder='请输入密码'
                        clearButtonMode={'while-editing'}
                        secureTextEntry={true}
                        onChangeText={text => console.log(text)}
                    />
                    } bottomSeparator={'full'}
                />
            </View>
        );
    }

    renderItem = ({item, index})=>{
        const {account} = item;

        return(
            <ListRow
        style={{height: itemHeight}}
        title={account}
        accessory={
        <TouchableOpacity
            style={[styles.accessoryStyle, {width: 35, height: itemHeight}]}
            activeOpacity={kActiveOpacity}
            onPress={()=>this.accountDeleteOnPress(item, index)}
        >
            <Image source={Icon.icon_del} />
        </TouchableOpacity>
    }
        onPress={() => this.accountItemOnPress(item)}
        topSeparator={'full'}
        />
        );
    };

    /*2019-05-30 账号列表显示/隐藏事件**/
    accountViewOnPress = ()=>{
        const {isExpand} = this.state;
        const {accountList} = this.props;

        const _listHeight = !isExpand? accountListTemp.length * itemHeight : 0;

        // ⚠️todo: 加入一个弹簧动画效果显示列表

        LayoutAnimation.easeInEaseOut();

        this.setState({
           isExpand: !isExpand,
           listHeight: _listHeight
        });



        // Animated.spring(this.listHeight, {
        //     toValue: _listHeight,  //属性目标值
        //     duration: 500,
        //     friction: 5,        //摩擦力 （越小 振幅越大）
        //     tension: 1000,      //拉力
        // }).start(()=>{
        //
        // });
    };

    /*2019-05-30 点击历史账户item事件**/
    accountItemOnPress = (item) =>{
        alert(item.account)
    };

    /*2019-05-30 账号删除事件**/
    accountDeleteOnPress = (item, index) =>{
        alert(item.account)
    };
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        paddingHorizontal: 25,
        backgroundColor: 'transparent',
    },
    listRowStyle: {
        backgroundColor: 'transparent',
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
        paddingBottom: 0
    },
    inputStyle: {
        flex: 1,
        height: 45,
        borderColor: 'transparent',
        paddingHorizontal: 0,
        backgroundColor: 'transparent'
    },
    accessoryStyle: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
});
