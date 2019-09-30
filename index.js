/**
 * @format
 */

import {AppRegistry, YellowBox} from 'react-native';
import './app/utils/Global';
import {name as appName} from './app.json';
import {AppRouter} from './app/routers/AppRouter';
import {Theme} from 'teaset';
import CustomTheme from './app/utils/CustomTheme';

YellowBox.ignoreWarnings([
    'Require cycle:',
    'Warning: Expected instance props to match',
    'Warning: ViewPagerAndroid has been extracted from react-native core and will be removed in a future release.',
    'Warning: Slider has been extracted from react-native core and will be removed in a future release.',
    'Warning: Async Storage has been extracted from react-native core and will be removed in a future release.'
]);

// 替换主题设置
Theme.set(CustomTheme);


AppRegistry.registerComponent(appName, () => AppRouter);
