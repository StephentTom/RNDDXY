/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import {Dimensions, Platform} from 'react-native';
import {Theme} from 'teaset';
import DeviceInfo from './DeviceInfo';


/**@desc 2019/5/25 其他*/
const {width, height} = Dimensions.get('window');
// 屏幕宽高
global.kScreenWidth = width;
global.kScreenHeight = height;


global.tabBarItemCount = 5;  /**@desc 2019/5/25 tabBarItem个数*/
global.kActiveOpacity = 0.8;
global.kMeHeadHeight = height * 0.35;


/*2019-05-29 登录用户类型。用户身份类型. 0:游客 1:教师 2:家长 3:园长 11:行政老师
visitor：0； parents：2； teacher：1； admin：11； leader：3；**/
global.userTypes = {
   visitor: 'visitor',
   parents: 'parents',
   teacher: 'teacher',
   admin  : 'admin',
   leader : 'leader'
};

/**@desc 2019/5/24 颜色分类*/
global.colorConfig = {
   // 主题颜色
   themeColor: '#51c81c',
   // 页面背景颜色
   bgColor: '#f5f5f5',
   // 淡粉色
   thinPink: '#fc6069',
   // 分割线颜色
   separatorColor: '#383838',
   // 灰色
   grayColor: '#aaa'
};


// 设备类型
global.SDeviceInfo = DeviceInfo;
global.isIOS = Platform.OS === 'ios';
global.isAndroid = Platform.OS === 'android';

// 全局使用框架teaset-->Theme
global.STheme = Theme;

// 时间状态栏高度
global.statusBarHeight = STheme.statusBarHeight;
// 导航栏高度
global.navBarHeight = STheme.navBarContentHeight + STheme.statusBarHeight;





