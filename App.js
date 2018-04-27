import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import FriendsList from './FriendsList'
import friends from './friendsData'

export default class App extends React.Component {

  render() {
    return <FriendsList friends={friends} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
