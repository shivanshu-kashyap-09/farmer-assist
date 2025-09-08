import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

const ChatBotScreen = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      from: "bot",
      text: "Hello! I am DigiShivar AI. I can help you with all your farming questions. What would you like to know?",
      time: "11:38 PM",
    },
  ]);
  const [input, setInput] = useState("");

  const quickQuestions = [
    "How to grow turmeric organically?",
    "Current weather in my area?",
    "Soybean pest control methods",
    "Government subsidy for drip irrigation",
    "Best time for cotton sowing",
    "Organic fertilizer recommendations",
  ];

  const infoCards = [
    {
      icon: "sparkles-outline",
      title: "Smart AI Responses",
      desc: "Get intelligent, context-aware answers to all your farming questions powered by advanced AI.",
      color: "#22c55e",
    },
    {
      icon: "cloud-outline",
      title: "Weather Integration",
      desc: "Ask about weather and get location-based organized data with farming recommendations.",
      color: "#3b82f6",
    },
    {
      icon: "medkit-outline",
      title: "Krushi Doctor Guidance",
      desc: "Get directed to pest diagnosis tools for detailed crop health analysis and treatment.",
      color: "#ef4444",
    },
    {
      icon: "language-outline",
      title: "Multi-Language Support",
      desc: "Chat in English, Hindi, or Marathi. Switch languages anytime during your conversation.",
      color: "#8b5cf6",
    },
  ];

  const formatResponse = (resp) => {
  if (!resp) return "⚠️ No response from AI";

  // If response is an object, convert it to readable string
  if (typeof resp === "object") {
    return Object.entries(resp)
      .map(([key, value]) => {
        if (typeof value === "object") {
          return `${key}:\n${JSON.stringify(value, null, 2)}`;
        }
        return `${key}: ${value}`;
      })
      .join("\n\n");
  }

  // If it's already a string
  return resp;
};

const sendMessage = async () => {
  if (input.trim() === "") return;

  // Add user message
  const newMsg = {
    id: Date.now(),
    from: "user",
    text: input,
    time: "Now",
  };
  setMessages((prev) => [...prev, newMsg]);

  try {
    const response = await fetch("http://192.168.151.117:8000/ai/prompt", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
      body: new URLSearchParams({ prompt: input }).toString(),
    });

    const data = await response.json();
    console.log("✅ FastAPI Response:", data);

    // Format response properly
    const botMsg = {
      id: Date.now() + 1,
      from: "bot",
      text: formatResponse(data.response?.response || data.response),
      time: "Now",
    };
    setMessages((prev) => [...prev, botMsg]);
  } catch (error) {
    console.error("Error:", error);
    const errorMsg = {
      id: Date.now() + 2,
      from: "bot",
      text: "⚠️ Sorry, something went wrong. Please try again.",
      time: "Now",
    };
    setMessages((prev) => [...prev, errorMsg]);
  }

  setInput("");
};


  return (
    <View style={styles.container}>
      {/* Header */}
      <LinearGradient colors={["#16a34a", "#2563eb"]} style={styles.header}>
        <Text style={styles.headerTitle}>AI Chat Assistant</Text>
        <Text style={styles.headerSubtitle}>
          Ask anything about farming, crops, weather & more
        </Text>
        <View style={styles.headerRight}>
          <Text style={styles.language}>🌐 English</Text>
          <View style={styles.statusDot} />
          <Text style={styles.online}>Online</Text>
        </View>
      </LinearGradient>

      {/* Chat messages */}
      <ScrollView style={styles.chatBox}>
        {messages.map((msg) => (
          <View
            key={msg.id}
            style={[
              styles.message,
              msg.from === "bot" ? styles.botMsg : styles.userMsg,
            ]}
          >
            {msg.from === "bot" && (
              <Ionicons
                name="chatbubble-ellipses-outline"
                size={20}
                color="#16a34a"
                style={{ marginRight: 6 }}
              />
            )}
            <View>
              <Text style={styles.msgText}>{msg.text}</Text>
              <Text style={styles.msgTime}>{msg.time}</Text>
            </View>
          </View>
        ))}

        {/* Quick Questions */}
        <View style={styles.quickWrapper}>
          <Text style={styles.quickTitle}>⚡ Quick Questions to Get Started:</Text>
          <View style={styles.quickGrid}>
            {quickQuestions.map((q, i) => (
              <TouchableOpacity
                key={i}
                style={styles.quickBtn}
                onPress={() => setInput(q)}
              >
                <Ionicons
                  name="flash-outline"
                  size={16}
                  color="#16a34a"
                  style={{ marginRight: 6 }}
                />
                <Text style={styles.quickText}>{q}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <Text style={styles.quickNote}>
            Click any question above or type your own below
          </Text>
        </View>
      </ScrollView>

      {/* Input Box */}
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder="Ask about crops, weather, pests, market prices..."
          value={input}
          onChangeText={setInput}
        />
        <TouchableOpacity style={styles.sendBtn} onPress={sendMessage}>
          <Ionicons name="send" size={22} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Footer Tags */}
      <View style={styles.footerTags}>
        <Text style={[styles.tag, { color: "green" }]}>
          ● AI-powered responses
        </Text>
        <Text style={[styles.tag, { color: "blue" }]}>
          ● Weather integration
        </Text>
        <Text style={[styles.tag, { color: "red" }]}>
          ● Krushi Doctor guidance
        </Text>
        <Text style={[styles.tag, { color: "purple" }]}>
          ● Multi-language support
        </Text>
      </View>

      {/* Info Cards */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.cardsWrapper}
      >
        {infoCards.map((card, i) => (
          <View key={i} style={styles.card}>
            <Ionicons name={card.icon} size={28} color={card.color} />
            <Text style={styles.cardTitle}>{card.title}</Text>
            <Text style={styles.cardDesc}>{card.desc}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f9fafb" },

  // Header
  header: {
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  headerTitle: { fontSize: 20, fontWeight: "700", color: "#fff" },
  headerSubtitle: { fontSize: 14, color: "#e5e7eb", marginTop: 4 },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  language: { color: "#fff", marginRight: 10 },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "lime",
    marginRight: 4,
  },
  online: { color: "#fff" },

  // Chat
  chatBox: { flex: 1, padding: 12 },
  message: {
    flexDirection: "row",
    marginBottom: 12,
    maxWidth: "85%",
    maxHeight: "90%",
  },
  botMsg: { alignSelf: "flex-start" },
  userMsg: {
    alignSelf: "flex-end",
    backgroundColor: "#e0f2fe",
    borderRadius: 10,
    padding: 8,
  },
  msgText: { fontSize: 14, color: "#111827" },
  msgTime: { fontSize: 10, color: "#6b7280", marginTop: 4 },

  // Quick Questions
  quickWrapper: {
    marginTop: 10,
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
    elevation: 3,
  },
  quickTitle: { fontSize: 14, fontWeight: "600", marginBottom: 10 },
  quickGrid: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  quickBtn: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#d1d5db",
    padding: 6,
    borderRadius: 8,
    margin: 4,
  },
  quickText: { fontSize: 13, color: "#111827" },
  quickNote: {
    fontSize: 12,
    color: "#6b7280",
    marginTop: 10,
    textAlign: "center",
  },

  // Input
  inputWrapper: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: "#e5e7eb",
  },
  input: {
    flex: 1,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#d1d5db",
    marginRight: 8,
  },
  sendBtn: {
    backgroundColor: "#16a34a",
    borderRadius: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  // Footer Tags
  footerTags: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#f3f4f6",
  },
  tag: { fontSize: 12, marginHorizontal: 6 },

  // Info Cards
  cardsWrapper: { padding: 12 },
  card: {
    width: 220,
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginRight: 12,
    elevation: 3,
  },
  cardTitle: { fontSize: 16, fontWeight: "600", marginVertical: 8 },
  cardDesc: { fontSize: 13, color: "#6b7280" },
});

export default ChatBotScreen;
