/**
 * @providesModule ItsAMatch
 */

'use strict';

import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

export default function ItsAMatch(props) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.label}>It's a match!</Text>
        <View style={styles.imageContainer}>
          <View style={styles.imageWrapper}>
            <Image style={styles.image} source={props.card.image} />
          </View>
          <View style={styles.imageWrapper}>
            <Image style={styles.image} source={props.card.image} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    zIndex: 1000,
  },
  label: {
    fontSize: 48,
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageWrapper: {
    width: 84,
    height: 84,
    borderRadius: 84,
    marginHorizontal: 8,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowRadius: 10,
    shadowOpacity: 0.2,
  },
  image: {
    width: 84,
    height: 84,
    borderRadius: 42,
  }
});
