import React from 'react';
import {
  ActivityIndicator,
  // View,
  StyleSheet,
  TouchableOpacity,
  Image,
  // Modal,
  Dimensions,
  View,
} from 'react-native';

import type { FeaturesWrapperProps } from '../@types';

const { height } = Dimensions.get('screen');

const Loader = ({ onRequestClose }: FeaturesWrapperProps) => {
  return (
    // <Modal
    //   animationType="slide"
    //   transparent={true}
    //   {...{ visible, onRequestClose }}
    //   style={styles.wrapper}
    // >
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={onRequestClose} style={styles.closeContainer}>
        <Image
          source={require('../assets/close.png')}
          style={styles.closeIcon}
        />
      </TouchableOpacity>
      <ActivityIndicator
        style={styles.activityIndicator}
        size="small"
        color="#0066FF"
      />
    </View>
    // {/* </Modal> */ }
  );
};

const styles = StyleSheet.create({
  wrapper: {
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'white',
    // height: '95%',
    flex: 1,
    backgroundColor: '#ffffff',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
  },
  closeContainer: {
    padding: 20,
    marginRight: -20,
    position: 'absolute',
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
  },
  activityIndicator: {
    paddingVertical: height / 2,
  },
  closeIcon: {
    width: 35,
    height: 35,
  },
});

export default Loader;
