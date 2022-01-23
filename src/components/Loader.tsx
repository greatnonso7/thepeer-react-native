import React from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
} from 'react-native';

import type { FeaturesWrapperProps } from '../@types';

const Loader = ({ onRequestClose, visible }: FeaturesWrapperProps) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      {...{ visible, onRequestClose }}
    >
      <View style={styles.wrapper}>
        <TouchableOpacity
          onPress={onRequestClose}
          style={styles.closeContainer}
        >
          <Image
            source={require('../assets/close.png')}
            style={styles.closeIcon}
          />
        </TouchableOpacity>
        <ActivityIndicator size="small" color="#0066FF" />
      </View>
    </Modal>
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
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  closeIcon: {
    width: 40,
    height: 40,
  },
});

export default Loader;
