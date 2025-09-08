import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
  ActivityIndicator,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";

const pestsData = [
  { name: "Bollworm", crops: "Cotton, Tomato, Chilli", severity: "High", season: "Kharif" },
  { name: "Aphids", crops: "Wheat, Mustard, Pea", severity: "Medium", season: "Rabi" },
  { name: "Stem Borer", crops: "Rice, Sugarcane", severity: "High", season: "Kharif" },
  { name: "Leaf Miner", crops: "Tomato, Bean, Cucumber", severity: "Medium", season: "All seasons" },
  { name: "Whitefly", crops: "Cotton, Tomato, Okra", severity: "High", season: "All seasons" },
  { name: "Thrips", crops: "Onion, Chilli, Cotton", severity: "Medium", season: "Summer" },
];

const BACKEND_URL = "http://10.170.216.117:8000/disease/predict"; // Your FastAPI endpoint

const KrushiDoctorScreen = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [prediction, setPrediction] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  // Pick image from gallery
  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert("Permission required", "Camera roll permission is required!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      uploadImage(result.assets[0].uri);
    }
  };

  // Take photo from camera
  const takePhoto = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert("Permission required", "Camera permission is required!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      uploadImage(result.assets[0].uri);
    }
  };

  // Upload image to backend
  const uploadImage = async (uri: string) => {
    try {
      setLoading(true);
      setPrediction(null);

      const formData = new FormData();
      formData.append("file", {
        uri,
        name: "image.jpg",
        type: "image/jpeg",
      } as any);

      const response = await axios.post(BACKEND_URL, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setPrediction(response.data);
    } catch (error: any) {
      console.log(error);
      Alert.alert("Error", error.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerIcon}>
          <Ionicons name="medkit-outline" size={32} color="#fff" />
        </View>
        <Text style={styles.title}>Krushi Doctor - AI Pest & Disease Diagnosis</Text>
        <Text style={styles.subtitle}>
          Upload crop images for automatic crop identification and health analysis
        </Text>
      </View>

      {/* Upload Section */}
      <View style={styles.uploadSection}>
        {selectedImage ? (
          <Image source={{ uri: selectedImage }} style={styles.uploadedImage} />
        ) : (
          <Ionicons name="camera-outline" size={64} color="#999" />
        )}

        <View style={styles.uploadButtonsRow}>
          <TouchableOpacity style={styles.uploadButton} onPress={pickImage}>
            <Text style={styles.uploadButtonText}>Choose from Gallery</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.uploadButton} onPress={takePhoto}>
            <Text style={styles.uploadButtonText}>Take Photo</Text>
          </TouchableOpacity>
        </View>

        {loading && <ActivityIndicator size="large" color="#DC2626" style={{ marginTop: 16 }} />}

        {prediction && (
          <View style={styles.predictionBox}>
            <Text style={styles.predictionText}>
              Predicted Class: {prediction.predicted_class}
            </Text>
            <Text style={styles.predictionText}>
              Confidence: {(prediction.confidence * 100).toFixed(2)}%
            </Text>
          </View>
        )}
      </View>

      {/* Pests Section */}
      <View style={styles.pestsContainer}>
        <Text style={styles.pestsTitle}>Common Pests</Text>
        {pestsData.map((pest, idx) => (
          <TouchableOpacity key={idx} style={styles.pestCard}>
            <View
              style={[
                styles.pestIcon,
                { backgroundColor: pest.severity === "High" ? "#FEE2E2" : "#FEF3C7" },
              ]}
            >
              <Ionicons
                name="bug-outline"
                size={24}
                color={pest.severity === "High" ? "#B91C1C" : "#B45309"}
              />
            </View>
            <View style={styles.pestInfo}>
              <Text style={styles.pestName}>{pest.name}</Text>
              <Text style={styles.pestCrops}>{pest.crops}</Text>
              <View style={styles.pestDetails}>
                <Text
                  style={[
                    styles.severityBadge,
                    {
                      backgroundColor: pest.severity === "High" ? "#FEE2E2" : "#FEF3C7",
                      color: pest.severity === "High" ? "#B91C1C" : "#B45309",
                    },
                  ]}
                >
                  {pest.severity}
                </Text>
                <Text style={styles.season}>{pest.season}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FEF2F2", padding: 16 },
  header: { alignItems: "center", marginBottom: 24 },
  headerIcon: {
    backgroundColor: "#DC2626",
    padding: 16,
    borderRadius: 50,
    marginBottom: 12,
  },
  title: { fontSize: 22, fontWeight: "bold", color: "#111", textAlign: "center" },
  subtitle: { fontSize: 14, color: "#4B5563", textAlign: "center", marginTop: 4 },

  uploadSection: {
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    marginBottom: 24,
  },
  uploadedImage: { width: 200, height: 200, borderRadius: 12, marginBottom: 12 },
  uploadButtonsRow: { flexDirection: "row", marginTop: 12, gap: 12 },
  uploadButton: {
    backgroundColor: "#DC2626",
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  uploadButtonText: { color: "#fff", fontWeight: "600" },

  predictionBox: { marginTop: 16, backgroundColor: "#FEF3C7", padding: 12, borderRadius: 8 },
  predictionText: { fontSize: 16, fontWeight: "600", color: "#B45309" },

  pestsContainer: { marginBottom: 32 },
  pestsTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 12 },
  pestCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
    marginBottom: 8,
  },
  pestIcon: { width: 48, height: 48, borderRadius: 12, justifyContent: "center", alignItems: "center", marginRight: 12 },
  pestInfo: { flex: 1 },
  pestName: { fontSize: 16, fontWeight: "600", color: "#111" },
  pestCrops: { fontSize: 14, color: "#6B7280", marginVertical: 2 },
  pestDetails: { flexDirection: "row", alignItems: "center", marginTop: 4, gap: 6 },
  severityBadge: { paddingHorizontal: 6, paddingVertical: 2, borderRadius: 6, fontSize: 12, fontWeight: "600" },
  season: { fontSize: 12, color: "#6B7280" },
});

export default KrushiDoctorScreen;
