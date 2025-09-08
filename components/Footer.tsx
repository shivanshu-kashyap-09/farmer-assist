import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type FooterProps = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

const Footer: React.FC<FooterProps> = ({ activeTab, setActiveTab }) => {
  return (
    <View style={styles.footer}>
      {/* Home Tab */}
      <TouchableOpacity
        style={[styles.tab, activeTab === "home" && styles.activeTab]}
        onPress={() => setActiveTab("home")}
      >
        <Ionicons
          name="home-outline"
          size={22}
          color={activeTab === "home" ? "#fff" : "#333"}
        />

        <Text
          style={[
            styles.tabText,
            activeTab === "home" && styles.activeTabText,
          ]}
        >
          Home
        </Text>
      </TouchableOpacity>

      {/* AI Chat Tab */}
      <TouchableOpacity
        style={[styles.tab, activeTab === "chat" && styles.activeTab]}
        onPress={() => setActiveTab("chat")}
      >
        <Ionicons
          name="chatbubble-ellipses-outline"
          size={22}
          color={activeTab === "chat" ? "#fff" : "#333"}
        />
        <Text
          style={[
            styles.tabText,
            activeTab === "chat" && styles.activeTabText,
          ]}
        >
          AI Chat
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    paddingVertical: 10,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
  },
  tab: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    paddingVertical: 8,
    borderRadius: 12,
    marginHorizontal: 5,
  },
  activeTab: {
    backgroundColor: "#2E7D32", // Green highlight
  },
  tabText: {
    fontSize: 12,
    color: "#333",
    marginTop: 4,
  },
  activeTabText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default Footer;
