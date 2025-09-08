import React from 'react';
import { View, StyleSheet } from 'react-native';

const TabBarBackground = () => {
  return <View style={styles.background} />;
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#fff', // or any color you want
  },
});

export default TabBarBackground;
