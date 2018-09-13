import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from 'Header';
import DanielImage from 'DanielImage';
import SuperLikeButton from 'SuperLikeButton';

import SwipeCards from 'SwipeCards';
import ItsAMatch from 'ItsAMatch';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      match: false,
      card: null,
    };
  }

  _onSwipe = (card) => {
    this.setState({
      card,
      match: true,
    });
    console.log('swiped yep', card);
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.match && (
          <ItsAMatch card={this.state.card} />
        )}
        <Header title="Daniel" />
        <SwipeCards handleYup={this._onSwipe} style={{ flex: 1 }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    paddingVertical: 0,
  },
  superLikeContainer: {
    height: 100,
    padding: 8,
    paddingBottom: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
