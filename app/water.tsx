import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

const techniques = [
  {
    id: "1",
    title: "💧 Drip Irrigation",
    desc: "Saves up to 60% water by delivering it directly to plant roots.",
    img: "https://img.icons8.com/color/96/drip.png",
  },
  {
    id: "2",
    title: "🚰 Rainwater Harvesting",
    desc: "Collect and store rainwater for irrigation and groundwater recharge.",
    img: "https://img.icons8.com/color/96/rain.png",
  },
  {
    id: "3",
    title: "🌊 Sprinkler Irrigation",
    desc: "Distributes water evenly like rainfall, suitable for all crops.",
    img: "https://img.icons8.com/color/96/sprinkler.png",
  },
  {
    id: "4",
    title: "🪣 Mulching",
    desc: "Conserves soil moisture by covering the soil with crop residues.",
    img: "https://img.icons8.com/color/96/mulch.png",
  },
];

const WaterManagement = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>💦 Smart Water Management</Text>
      <Text style={styles.subHeader}>
        Efficient irrigation and water-saving techniques for modern farming.
      </Text>

      {/* Cards */}
      {techniques.map((item) => (
        <View key={item.id} style={styles.card}>
          <Image source={{ uri: item.img }} style={styles.icon} />
          <View style={{ flex: 1 }}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardDesc}>{item.desc}</Text>
          </View>
        </View>
      ))}

      {/* Tips Section */}
      <View style={styles.tipsBox}>
        <Text style={styles.tipsTitle}>🌱 Water Saving Tips</Text>
        <Text style={styles.tip}>✔ Use sensors to monitor soil moisture.</Text>
        <Text style={styles.tip}>✔ Water crops early morning or late evening.</Text>
        <Text style={styles.tip}>✔ Fix leakages in irrigation pipes.</Text>
        <Text style={styles.tip}>✔ Choose drought-resistant crop varieties.</Text>
      </View>
    </ScrollView>
  );
};

export default WaterManagement;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a1128",
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4ade80",
    marginBottom: 8,
  },
  subHeader: {
    fontSize: 14,
    color: "#ccc",
    marginBottom: 20,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1f2937",
    borderRadius: 12,
    padding: 12,
    marginBottom: 14,
  },
  icon: {
    width: 60,
    height: 60,
    marginRight: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#facc15",
  },
  cardDesc: {
    fontSize: 13,
    color: "#ddd",
    marginTop: 4,
  },
  tipsBox: {
    backgroundColor: "#162447",
    borderRadius: 12,
    padding: 16,
    marginTop: 20,
  },
  tipsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4ade80",
    marginBottom: 10,
  },
  tip: {
    fontSize: 14,
    color: "#fff",
    marginBottom: 6,
  },
});
