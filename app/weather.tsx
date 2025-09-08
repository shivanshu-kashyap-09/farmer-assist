import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet, ActivityIndicator, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";

const BACKEND_URL = "http://10.170.216.117:8000/weather/7days?city=Roorkee";

export default function WeatherDashboard() {
  const [weatherData, setWeatherData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWeather();
  }, []);

  const fetchWeather = async () => {
    try {
      const response = await axios.get(BACKEND_URL);
      // console.log(response);
      setWeatherData(response.data);
    } catch (error: any) {
      Alert.alert("Error", error.message || "Unable to fetch weather data");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <ActivityIndicator size="large" color="#4338CA" style={{ flex: 1 }} />;

  if (!weatherData) return <Text style={{ textAlign: "center", marginTop: 20 }}>No data available</Text>;

  const current = weatherData.currentConditions;
  const days = weatherData.days.slice(0, 5); // 5-day forecast

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 16 }}>
      {/* Current Weather */}
      <LinearGradient
        colors={["#1E40AF", "#4338CA", "#7C3AED"]}
        style={styles.weatherCard}
      >
        <View style={styles.weatherHeader}>
          <View style={styles.locationContainer}>
            <Ionicons name="location-outline" size={24} color="#fff" />
            <View style={{ marginLeft: 8 }}>
              <Text style={styles.locationText}>{weatherData.resolvedAddress}</Text>
              <Text style={styles.subText}>Current Conditions</Text>
            </View>
          </View>
          <View style={styles.tempContainer}>
            <Text style={styles.tempText}>{Math.round(current.temp)}°C</Text>
            <Text style={styles.subText}>{current.conditions}</Text>
          </View>
        </View>
      </LinearGradient>

      {/* 5-Day Forecast */}
      <View style={{ marginTop: 24 }}>
        <Text style={styles.forecastTitle}>5-Day Weather Forecast</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 12 }}>
          {days.map((day: any, idx: number) => (
            <View key={idx} style={styles.forecastCard}>
              <Text style={styles.forecastDay}>{day.datetime}</Text>
              <Ionicons name="rainy-outline" size={48} color="#3B82F6" style={{ marginVertical: 8 }} />
              <Text style={styles.forecastTemp}>{Math.round(day.temp)}°</Text>
              <Text style={styles.forecastSub}>{Math.round(day.feelslike)}°</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#EFF6FF" },
  weatherCard: { borderRadius: 24, padding: 16, marginBottom: 24 },
  weatherHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  locationContainer: { flexDirection: "row", alignItems: "center" },
  locationText: { color: "#fff", fontSize: 20, fontWeight: "bold" },
  subText: { color: "#DBEAFE", fontSize: 14 },
  tempContainer: { alignItems: "flex-end" },
  tempText: { fontSize: 28, color: "#fff", fontWeight: "bold" },
  forecastTitle: { fontSize: 20, fontWeight: "bold", color: "#111827" },
  forecastCard: {
    backgroundColor: "#EFF6FF",
    borderRadius: 16,
    padding: 16,
    marginRight: 12,
    alignItems: "center",
    width: 100,
  },
  forecastDay: { fontSize: 14, fontWeight: "600", color: "#111827" },
  forecastTemp: { fontSize: 18, fontWeight: "bold", color: "#111827" },
  forecastSub: { fontSize: 12, color: "#6B7280" },
});
