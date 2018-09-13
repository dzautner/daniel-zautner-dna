/**
 * @providesModule SwipeCards
 */

'use strict';

import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import PropTypes from 'prop-types';

import SwipeCards from 'react-native-swipe-cards';
import DanielImage from 'DanielImage';
import YupComponent from 'YupComponent';

import curly from '../static/curly.png';
import straight from '../static/straight.png';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <DanielImage source={this.props.image} />
      </View>
    )
  }
}

class NoMoreCards extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.noMoreCards}>
        <Text>No more cards</Text>
      </View>
    )
  }
}

const cards = [
  {name: '1', image: curly },
  {name: '2', image: straight },
];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: cards,
      outOfCards: false
    }
  }

  handleYup = (card) => {
    this.props.handleYup(card);
    console.log("yup")
  }

  handleNope = (card) => {
    this.props.handleYup(card);
    console.log("yep")
  }

  cardRemoved (index) {
    console.log(`The index is ${index}`);

    let CARD_REFRESH_LIMIT = 3

    if (this.state.cards.length - index <= CARD_REFRESH_LIMIT + 1) {
      console.log(`There are only ${this.state.cards.length - index - 1} cards left.`);

      if (!this.state.outOfCards) {
        console.log(`Adding ${cards.length} more cards`)

        this.setState({
          cards: this.state.cards.concat(cards),
        })
      }

    }

  }

  render() {
    return (
      <SwipeCards
        cards={this.state.cards}
        loop={false}

        renderCard={(cardData) => <Card {...cardData} />}
        renderNoMoreCards={() => <NoMoreCards />}
        showYup={true}
        showNope={true}

        yupView={<YupComponent label="😍" backgroundColor="#0066CC" />}
        noView={<YupComponent label="😘" backgroundColor="#83CCD2" />}

        yupStyle={{ borderColor: 'rgba(0,0,0,0)' }}
        nopeStyle={{ borderColor: 'rgba(0,0,0,0)' }}

        handleYup={this.handleYup}
        handleNope={this.handleNope}
        cardRemoved={this.cardRemoved.bind(this)}
      />
    )
  }
}

const styles = StyleSheet.create({
  thumbnail: {
    width: 300,
    height: 300,
  },
  text: {
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10
  },
  noMoreCards: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
