import React from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

const Loader = () => {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity>
        <Image source={require('../assets/close.png')} />
      </TouchableOpacity>
      <ActivityIndicator size="small" color="#0066FF" />
    </View>
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
});

export default Loader;
