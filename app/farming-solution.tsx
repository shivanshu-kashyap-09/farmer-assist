import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import FarmingCard from "../components/FarmingCard";
import AboutScreen from "../screens/AboutScreen";

const FarmingSolution = () => {
  const router = useRouter();

  const [activeTab, setActiveTab] = useState("home");

  const farmingCards = [
    { id: "1", title: "Crop Planning", description: "Plan your crops according to season and soil type.", icon: "leaf-outline" },
    { id: "2", title: "Soil Health", description: "Monitor and maintain your soil for better yield.", icon: "analytics-outline" },
    { id: "3", title: "Water Management", description: "Efficient irrigation techniques for your farm.", icon: "water-outline" },
    { id: "4", title: "Market Prices", description: "Check live market prices for your crops.", icon: "cash-outline" },
    { id: "5", title: "Weather Forecast", description: "Get accurate weather predictions for farming.", icon: "cloud-outline" },
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Hero Section */}
        <View style={styles.heroSection}>
          <Text style={styles.subtitle}>Complete Solutions</Text>
          <Text style={styles.title}>Complete Farming Solutions</Text>
          <Text style={styles.description}>
            From seed to harvest, DigiShivar AI provides comprehensive support for every aspect of modern agriculture.
          </Text>
        </View>

        {/* Farming Cards */}
        {farmingCards.map((item) => (
          <FarmingCard
            key={item.id}
            title={item.title}
            description={item.description}
            icon={item.icon}
            onPress={() => {
              if (item.title === "Weather Forecast") {
                router.push("/weather"); // navigate to Weather.tsx page
              }
              else if (item.title === "Soil Health") {
        router.push("/soil-health"); // navigate to soil-health.tsx page
      }

      else if (item.title === "Market Prices") {
  router.push("/market-price"); // navigate to market-price.tsx page
}

     else if (item.title === "Water Management") {
  router.push("/water"); // navigate to market-price.tsx page
}

              // Add more navigation logic for other cards if needed
            }}
          />
        ))}




        {/* Navigation Buttons */}
        <View style={styles.navButtons}>
          <TouchableOpacity style={styles.navButton} onPress={() => router.push("/impact")}>
            <Text style={styles.navButtonText}>View Impact</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton} onPress={() => router.push("/story")}>
            <Text style={styles.navButtonText}>Farmer Stories</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton} onPress={() => router.push("/aichat")}>
            <Text style={styles.navButtonText}>AI Chat Assistant</Text>
          </TouchableOpacity>
        </View>

        {/* About Section */}
        <AboutScreen />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9fdf9",
  },
  scrollContainer: {
    paddingBottom: 50,
    paddingTop: 20,
  },
  heroSection: {
    marginHorizontal: 16,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 10,
    color: "#0d0e0d",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#16a34a",
    textAlign: "center",
  },
  description: {
    fontSize: 14,
    color: "#111827",
    marginTop: 10,
    lineHeight: 20,
    textAlign: "center",
  },
  navButtons: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  navButton: {
    backgroundColor: "#2E7D32",
    paddingVertical: 12,
    borderRadius: 10,
    marginBottom: 12,
    alignItems: "center",
  },
  navButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default FarmingSolution;
