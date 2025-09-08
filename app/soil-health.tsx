import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const SoilHealth = () => {
  const [soilType, setSoilType] = useState("");
  const [crop, setCrop] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const handleCheckSoil = () => {
    if (soilType && crop) {
      setResult(
        `✅ For ${crop}, your ${soilType} soil is suitable.  
Recommended Fertilizer: Urea + DAP + Organic Compost.  
Do regular soil testing for better yield.`
      );
    } else {
      setResult("⚠️ Please enter soil type and crop.");
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <MaterialCommunityIcons name="flask-outline" size={32} color="#fff" />
        <Text style={styles.headerText}>Soil Health & Fertilizers</Text>
      </View>

      <Text style={styles.subText}>
        Get soil testing guidance and crop-specific fertilizer recommendations.
      </Text>

      <View style={styles.inputContainer}>
        <Ionicons name="layers-outline" size={22} color="#666" />
        <TextInput
          style={styles.input}
          placeholder="Enter Soil Type (e.g. Loamy, Clay, Sandy)"
          value={soilType}
          onChangeText={setSoilType}
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="leaf-outline" size={22} color="#666" />
        <TextInput
          style={styles.input}
          placeholder="Enter Crop Name (e.g. Wheat, Rice, Maize)"
          value={crop}
          onChangeText={setCrop}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleCheckSoil}>
        <Text style={styles.buttonText}>Check Soil Health</Text>
      </TouchableOpacity>

      {result && (
        <View style={styles.resultBox}>
          <Text style={styles.resultText}>{result}</Text>
        </View>
      )}
    </ScrollView>
  );
};

export default SoilHealth;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 12,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "700",
    color: "#fff",
    marginLeft: 10,
  },
  subText: {
    fontSize: 14,
    color: "#444",
    marginBottom: 20,
    textAlign: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 15,
    color: "#333",
  },
  button: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  resultBox: {
    backgroundColor: "#e8f5e9",
    marginTop: 20,
    padding: 15,
    borderRadius: 12,
    borderLeftWidth: 5,
    borderLeftColor: "#4CAF50",
  },
  resultText: {
    fontSize: 15,
    color: "#333",
  },
});
