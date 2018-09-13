/**
 * @providesModule SuperLikeButton
 */

'use strict';

import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
} from 'react-native';

export default function SuperLikeButton(props) {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.container}>
      <View style={styles.button}>
        <Text style={styles.label}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 32,
  },
  button: {
    borderRadius: 16,
    backgroundColor: '#0066CC',
    padding: 16,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowRadius: 10,
    shadowOpacity: 0.2,
  },
  label: {
    fontSize: 21,
    color: '#fff',
  }
})
