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
import { Camera, Permissions } from 'expo';
import SuperLikeButton from 'SuperLikeButton';

const itsamatch = 'https://bengsfort.github.io/unity-ads-showcase/images/daniel/itsamatch.png?=' + Date.now();
Image.prefetch(itsamatch);

export default class ItsAMatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasCameraPermission: false,
      cameraType: Camera.Constants.Type.front,
    };
  }

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  render() {
    const { hasCameraPermission, cameraType } = this.state;
    return (
      <View style={styles.container}>
        <View>
          <Image style={styles.matchImage} source={{ uri: itsamatch }} resizeMode="contain" />
          <View style={styles.imageContainer}>
            {hasCameraPermission && (
              <View style={styles.imageWrapper}>
                <Camera style={styles.image} type={cameraType} />
              </View>
            )}
            <View style={styles.imageWrapper}>
              <Image style={styles.image} source={{ uri: this.props.card.image }} />
            </View>
          </View>
          <SuperLikeButton title="Hell yeah" onPress={this.props.onPress} />
        </View>
      </View>
    );
  }
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
  matchImage: {
    height: 80,
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
    overflow: 'hidden',
  },
  image: {
    width: 84,
    height: 84,
    borderRadius: 42,
  }
});
