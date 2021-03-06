// @flow

import { StackNavigator } from 'react-navigation';

import * as Pages from '<%= appName %>/src/pages';

export default StackNavigator({
  home: {
    screen: Pages.Home,
  },
}, {
  initialRouteName: 'home',
});
