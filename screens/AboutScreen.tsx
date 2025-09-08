import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";   // ✅ Expo import
import StoryScreen from "./StoryScreen"

const ImpactScreen = () => {
  const stats = [
    {
      id: 1,
      icon: "people-outline",
      number: "10,000+",
      title: "Farmers Empowered",
      subtitle: "Active users across India",
      color: "#22c55e",
    },
    {
      id: 2,
      icon: "location-outline",
      number: "500+",
      title: "Villages Covered",
      subtitle: "Across Maharashtra & beyond",
      color: "#3b82f6",
    },
    {
      id: 3,
      icon: "chatbubble-outline",
      number: "50,000+",
      title: "Queries Answered",
      subtitle: "AI-powered farming advice",
      color: "#a855f7",
    },
    {
      id: 4,
      icon: "trending-up-outline",
      number: "25%",
      title: "Yield Improvement",
      subtitle: "Average increase reported",
      color: "#f97316",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.sectionTitle}>🌾 Our Impact</Text>
      <Text style={styles.heading}>Transforming Agriculture Across India</Text>
      <Text style={styles.subHeading}>
        Real numbers, real impact. See how DigiShivar AI is making a difference
        in the lives of farmers and agricultural communities.
      </Text>

      <View style={styles.cardsWrapper}>
        {stats.map((item) => (
          <View key={item.id} style={styles.card}>
            <View style={[styles.iconWrapper, { backgroundColor: item.color }]}>
              <Ionicons name={item.icon} size={24} color="#fff" /> 
            </View>
            <Text style={styles.number}>{item.number}</Text>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
          </View>
        ))}
      </View>
        <StoryScreen />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f9fafb",
  },
  sectionTitle: {
    textAlign: "center",
    fontSize: 24,
    color: "#b45309",
    fontWeight: "600",
    marginBottom: 4,
  },
  heading: {
    textAlign: "center",
    fontSize: 32,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 6,
  },
  subHeading: {
    textAlign: "center",
    fontSize: 20,
    color: "#6b7280",
    marginBottom: 20,
  },
  cardsWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  iconWrapper: {
    padding: 10,
    borderRadius: 12,
    marginBottom: 10,
  },
  number: {
    fontSize: 28,
    fontWeight: "700",
    color: "#111827",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "#111827",
    textAlign: "center",
    marginTop: 4,
  },
  subtitle: {
    fontSize: 16,
    color: "#6b7280",
    textAlign: "center",
    marginTop: 2,
  },
});

export default ImpactScreen;
