import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import FriendsList from './FriendsList.web'
import friends from './friendsData'


class ReactNativeWeb extends Component {
  render() {
    return (
      <FriendsList friends={friends} />
    );
  }
}

AppRegistry.registerComponent('ReactNativeWeb', () => ReactNativeWeb);
AppRegistry.runApplication('ReactNativeWeb', { rootTag: document.getElementById('react-app') });
