/**
 * @providesModule Header
 */

'use strict';

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.title || 'Daniel'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 72,
    paddingTop: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 32,
  }
})