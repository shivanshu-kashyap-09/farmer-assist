import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

export default function WeatherDashboard() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 16 }}>
      {/* Current Weather Card */}
      <LinearGradient
        colors={["#1E40AF", "#4338CA", "#7C3AED"]}
        style={styles.weatherCard}
      >
        <View style={styles.weatherHeader}>
          <View style={styles.locationContainer}>
            <Ionicons name="location-outline" size={24} color="#fff" />
            <View style={{ marginLeft: 8 }}>
              <Text style={styles.locationText}>Roorkee, Uttarakhand</Text>
              <Text style={styles.subText}>Current Conditions</Text>
            </View>
          </View>
          <View style={styles.tempContainer}>
            <Text style={styles.tempText}>31°C</Text>
            <Text style={styles.subText}>broken clouds</Text>
          </View>
        </View>

        {/* Weather Details */}
        <View style={styles.detailsContainer}>
          <View style={styles.leftDetails}>
            <View style={styles.tempIconContainer}>
              <Ionicons name="sunny-outline" size={60} color="#FBBF24" />
            </View>
            <View style={{ marginLeft: 12 }}>
              <Text style={styles.tempLarge}>31°C</Text>
              <Text style={styles.conditionText}>broken clouds</Text>
              <Text style={styles.feelsLike}>Feels like 37°C</Text>
            </View>
          </View>

          {/* Farming Recommendations */}
          <View style={styles.rightDetails}>
            <Text style={styles.recommendationTitle}>Farming Recommendations</Text>
            <View style={styles.recommendationCard}>
              <Ionicons name="checkmark-circle-outline" size={20} color="#22C55E" />
              <View style={{ marginLeft: 8, flex: 1 }}>
                <Text style={styles.recommendationHeader}>Optimal growing conditions</Text>
                <Text style={styles.recommendationText}>
                  Temperature range is ideal for most farming activities
                </Text>
                <View style={styles.recommendationFooter}>
                  <Text style={styles.recommendationSub}>Continue regular operations</Text>
                  <Text style={styles.lowPriority}>low priority</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </LinearGradient>

      {/* 5-Day Forecast Section */}
      <View style={styles.forecastSection}>
        <Text style={styles.forecastTitle}>5-Day Weather Forecast</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 12 }}>
          {/* Example Day */}
          <View style={styles.forecastCard}>
            <Text style={styles.forecastDay}>Today</Text>
            <Ionicons name="rainy-outline" size={48} color="#3B82F6" style={{ marginVertical: 8 }} />
            <Text style={styles.forecastTemp}>32°</Text>
            <Text style={styles.forecastSub}>31°</Text>
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFF6FF",
  },
  weatherCard: {
    borderRadius: 24,
    padding: 16,
    marginBottom: 24,
  },
  weatherHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  subText: {
    color: "#DBEAFE",
    fontSize: 14,
  },
  tempContainer: {
    alignItems: "flex-end",
  },
  tempText: {
    fontSize: 28,
    color: "#fff",
    fontWeight: "bold",
  },
  detailsContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  leftDetails: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
  },
  tempIconContainer: {
    backgroundColor: "#DBEAFE",
    borderRadius: 24,
    padding: 12,
  },
  tempLarge: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#111827",
  },
  conditionText: {
    fontSize: 16,
    color: "#374151",
    textTransform: "capitalize",
  },
  feelsLike: {
    fontSize: 14,
    color: "#6B7280",
  },
  rightDetails: {
    flex: 1,
    marginLeft: 16,
  },
  recommendationTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#111827",
  },
  recommendationCard: {
    backgroundColor: "#DCFCE7",
    padding: 12,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "flex-start",
  },
  recommendationHeader: {
    fontSize: 14,
    fontWeight: "600",
    color: "#111827",
  },
  recommendationText: {
    fontSize: 12,
    color: "#374151",
  },
  recommendationFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 4,
  },
  recommendationSub: {
    fontSize: 10,
    color: "#6B7280",
  },
  lowPriority: {
    fontSize: 10,
    color: "#15803D",
    backgroundColor: "#DCFCE7",
    paddingHorizontal: 6,
    borderRadius: 6,
    fontWeight: "600",
  },
  forecastSection: {
    marginBottom: 32,
  },
  forecastTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#111827",
  },
  forecastCard: {
    backgroundColor: "#EFF6FF",
    borderRadius: 16,
    padding: 16,
    marginRight: 12,
    alignItems: "center",
    width: 100,
  },
  forecastDay: {
    fontSize: 14,
    fontWeight: "600",
    color: "#111827",
  },
  forecastTemp: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#111827",
  },
  forecastSub: {
    fontSize: 12,
    color: "#6B7280",
  },
});
