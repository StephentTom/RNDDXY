/**
 * @Author Mr.Hong
 * @Date 2019/05/30
 * @Project WebStorm
 */


const CustomTheme = {
    ...STheme.themes.default,

    themeType: 'custom',
    /**
     * 导航条颜色
     */
    navColor: 'white',
    /**
     * 导航栏左右两边视图颜色
     */
    navTintColor: colorConfig.themeColor,
    /**
     * 时间栏颜色, 'light-content'; 可以单独设置: statusBarStyle={'light-content'}
     */
    navStatusBarStyle: 'dark-content',
    /**
     * 导航栏title颜色
     */
    navTitleColor: 'black',
};

export default CustomTheme;