import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const MarketPrice = () => {
  const [prices, setPrices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        // 👇 yaha apne backend ka URL dalna hai
        const response = await fetch("http://YOUR_BACKEND_URL/api/market-prices");
        const json = await response.json();
        setPrices(json.records || json); // tumhare backend ke response structure ke hisaab se
      } catch (err) {
        setError("⚠️ Failed to fetch market prices from backend.");
      } finally {
        setLoading(false);
      }
    };

    fetchPrices();
  }, []);

  const renderItem = ({ item }: { item: any }) => (
    <View style={styles.card}>
      <View style={styles.row}>
        <Ionicons name="leaf-outline" size={20} color="#2E7D32" />
        <Text style={styles.crop}>{item.commodity || item.commodity_name}</Text>
      </View>
      <Text style={styles.market}>
        📍 {item.market}, {item.state || item.state_name}
      </Text>
      <Text style={styles.price}>
        💰 Min: ₹{item.min_price} | Max: ₹{item.max_price} | Modal: ₹{item.modal_price}
      </Text>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#2E7D32" />
        <Text style={{ marginTop: 10, color: "#444" }}>Fetching latest prices...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={{ color: "red", fontSize: 16 }}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🌾 Market Prices</Text>
      <FlatList
        data={prices}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

export default MarketPrice;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9fdf9",
    padding: 16,
  },
  header: {
    fontSize: 22,
    fontWeight: "700",
    color: "#2E7D32",
    textAlign: "center",
    marginBottom: 16,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  crop: {
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 6,
    color: "#333",
  },
  market: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
  },
  price: {
    fontSize: 15,
    fontWeight: "500",
    color: "#1B5E20",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});