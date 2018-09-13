/**
 * @providesModule DanielImage
 */

'use strict';

import React from 'react';
import {
  View,
  Image,
  StyleSheet,
} from 'react-native';

export default function DanielImage(props) {
  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image source={props.source} style={styles.image} resizeMode="contain" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageWrapper: {
    width: 300,
    height: 427,
    borderRadius: 10,
    backgroundColor: '#080B0E',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowRadius: 10,
    shadowOpacity: 0.2,
  },
  image: {
    width: 300,
    height: 427,
    borderRadius: 10,
  },
});
