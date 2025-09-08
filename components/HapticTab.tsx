import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const HapticTab = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>HapticTab placeholder</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    color: "#333",
  },
});
