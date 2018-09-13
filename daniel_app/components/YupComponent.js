/**
 * @providesModule YupComponent
 */

'use strict';

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default function YupComponent(props) {
  return (
    <View style={[styles.container, { backgroundColor: props.backgroundColor }]}>
      <Text style={styles.label}>{props.label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
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
    fontSize: 32,
    color: '#fff',
  },
});
