import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Footer from "../components/Footer"; // adjust path
import { Slot } from "expo-router";

const RootLayout = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <View style={styles.container}>
      {/* Main content of each screen */}
      <View style={styles.content}>
        <Slot /> {/* This renders the current screen */}
      </View>

      {/* Footer always visible */}
      <Footer activeTab={activeTab} setActiveTab={setActiveTab} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { flex: 1 }, // fills space above footer
});

export default RootLayout;