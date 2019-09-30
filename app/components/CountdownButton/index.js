/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import PropType from 'prop-types';


const width_ = 120;
const height_ = 40;

export default class CountdownButton extends Component {

   static propTypes = {
      // 是否自动倒计时
      isAutoCountdown: PropType.bool,

      style: PropType.any,
      // 标题
      title: PropType.string,
      titleStyle: PropType.any,
      // 倒计时长
      timeLength: PropType.number,
      // 倒计时时是否可点击
      enableOfTiming: PropType.bool,
      // 点击
      onClick: PropType.func,
      // 自动倒计时结束回调函数
      endCountdownFunction: PropType.func
   };

   static defaultProps = {
      isAutoCountdown: false,
      title: '倒计时',
      borderColor: '#a9a9a9',
      count: 30,
      enableOfTiming: false
   };

   constructor(props) {
      super(props);

      this.state = {
         // 倒计时长
         timeCount: this.props.timeLength,
         // 倒计时文本状态
         timeTitle: this.props.title,
         // 是否正在倒计时(默认false)
         running: false,
         // 是否能点击(默认true)
         enable: true,
      }
   }

   render() {
      const {style, titleStyle} = this.props;
      const {timeTitle, enable} = this.state;

      const lineHeight = ((typeof style !== "undefined") && (style.height !== undefined))? style.height : height_;

      return (
         <TouchableOpacity
            style={[styles.container, style]}
            disabled={!enable}
            onPress={this._onPress}
         >
            <Text style={[styles.textStyle, titleStyle, {lineHeight}]}>{timeTitle}</Text>
         </TouchableOpacity>
      );
   }

   
   componentDidMount() {
      const {onClick, isAutoCountdown} = this.props;

      if (isAutoCountdown && onClick) {
         this.startCountdown();
      }
   }
   
   componentWillUnmount() {
      this.timer && clearInterval(this.timer);
   }

   _onPress = ()=>{
      const {onClick, isAutoCountdown} = this.props;

      if (isAutoCountdown && onClick) {
         onClick();
      } else {
         // 执行倒计时
         this.startCountdown();
      }
   };

   startCountdown = ()=>{
      const {running} = this.state;
      const {count, title, isAutoCountdown, onClick} = this.props;

      // 判断
      if (running) return;
      // 修改状态
      this.setState({
         running: true,
         enable: false,
      });

      const timeLength = this.state.timeCount;
      // 返回当前时间戳; 默认是以毫秒(ms)为单位
      const nowStampDate = Date.now();
      // 获取上限时间(未来时间); +100: 为容错
      const maxStampDate = nowStampDate + timeLength * 1000 + 100;

      // 先销毁定时器
      this.timer && clearInterval(this.timer);
      // 开启计时
      this.timer = setInterval(()=>{
         // 获取当前时间戳
         const nowStamp = Date.now();
         // 进行判断
         if (nowStamp >= maxStampDate) {
            // 结束倒计时
            this.timer && clearInterval(this.timer);
            // 状态改变
            this.setState({
               timeCount: count,
               timeTitle: title,
               running: false,
               enable: true
            });
            // 结束倒计时函数回调
            if (this.props.endCountdownFunction) {
               this.props.endCountdownFunction();
            }

         } else {
            // 计算当前时间与上限时间之间的差值;
            const value = (maxStampDate - nowStamp)/1000;
            const resTimeCount = parseInt(value, 10); // 10: 表示进制
            // 修改状态
            this.setState({
               timeCount: resTimeCount,
               timeTitle: (isAutoCountdown && onClick)? title: `${resTimeCount}s`,
               running: true,
               enable: !!(isAutoCountdown && onClick)
            });
         }
      }, 1000)
   }
}

const styles = StyleSheet.create({
   container: {
      width: width_,
      height: height_,
      position: 'absolute',
      top: statusBarHeight,
      backgroundColor: '#aaa',
   },

   textStyle: {
      fontSize: 13,
      color: '#fff',
      textAlign: 'center'
   }
});
