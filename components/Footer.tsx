import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

type FooterProps = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

const Footer: React.FC<FooterProps> = ({ activeTab, setActiveTab }) => {
  const router = useRouter();

  return (
    <View style={styles.footer}>
      {/* Home Tab */}
      <TouchableOpacity
        style={[styles.tab, activeTab === "home" && styles.activeTab]}
        onPress={() => {
          setActiveTab("home");
          router.push("/"); // navigate to HomeScreen
        }}
      >
        <Ionicons
          name="home-outline"
          size={22}
          color={activeTab === "home" ? "#fff" : "#333"}
        />
        <Text style={[styles.tabText, activeTab === "home" && styles.activeTabText]}>
          Home
        </Text>
      </TouchableOpacity>

      {/* AI Chat Tab */}
      <TouchableOpacity
        style={[styles.tab, activeTab === "chat" && styles.activeTab]}
        onPress={() => {
          setActiveTab("chat");
          router.push("/aichat"); // navigate to AiChatScreen
        }}
      >
        <Ionicons
          name="chatbubble-ellipses-outline"
          size={22}
          color={activeTab === "chat" ? "#fff" : "#333"}
        />
        <Text style={[styles.tabText, activeTab === "chat" && styles.activeTabText]}>
          AI Chat
        </Text>
      </TouchableOpacity>

      {/* Weather Tab */}
      <TouchableOpacity
        style={[styles.tab, activeTab === "weather" && styles.activeTab]}
        onPress={() => {
          setActiveTab("weather");
          router.push("/weather"); // navigate to WeatherScreen
        }}
      >
        <Ionicons
          name="cloud-outline"
          size={22}
          color={activeTab === "weather" ? "#fff" : "#333"}
        />
        <Text style={[styles.tabText, activeTab === "weather" && styles.activeTabText]}>
          Weather
        </Text>
      </TouchableOpacity>

      {/* Krushi Doctor Tab */}
      <TouchableOpacity
        style={[styles.tab, activeTab === "krushi" && styles.activeTab]}
        onPress={() => {
          setActiveTab("krushi");
          router.push("/krushidoctor"); // navigate to KrushiDoctorScreen
        }}
      >
        <Ionicons
          name="medkit-outline"
          size={22}
          color={activeTab === "krushi" ? "#fff" : "#333"}
        />
        <Text style={[styles.tabText, activeTab === "krushi" && styles.activeTabText]}>
          Krushi Doctor
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
    backgroundColor: "#2E7D32",
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
