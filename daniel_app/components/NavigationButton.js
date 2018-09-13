/**
 * @providesModule NavigationButton
 */

'use strict';

import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
} from 'react-native';

export default function NavigationButton(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.container}>
        <Text style={styles.label}>{props.next ? '>' : '<'}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    backgroundColor: '#83CCD2',
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
    fontSize: 18,
    color: '#fff',
  }
});
