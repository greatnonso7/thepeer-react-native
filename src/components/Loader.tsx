import React from 'react';
import {
  ActivityIndicator,
  // View,
  StyleSheet,
  TouchableOpacity,
  Image,
  // Modal,
  View,
} from 'react-native';

import type { FeaturesWrapperProps } from '../@types';

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
      <ActivityIndicator size="small" color="#0066FF" />
    </View>
    // {/* </Modal> */ }
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: '100%',
  },
  closeContainer: {
    width: 60,
    height: 60,
    position: 'absolute',
    top: 40,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
    // alignSelf: 'flex-end',
  },
  closeIcon: {
    width: 30,
    height: 30,
  },
});

export default Loader;
