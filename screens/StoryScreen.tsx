import React, { useRef, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native";

const { width } = Dimensions.get("window");

type Story = {
  id: string;
  name: string;
  location: string;
  crop: string;
  image: any;
  content: string;
};

const stories: Story[] = [
  {
    id: "1",
    name: "Vijay Kumar",
    location: "Nagpur, Maharashtra",
    crop: "Mixed Farming",
    image: require("../assets/images/icon.png"),
    content:
      "As a progressive farmer, DigiShivar AI has become my digital farming partner. The multilingual support makes it easy for my entire family to use.",
  },
  {
    id: "2",
    name: "Sunita Deshmukh",
    location: "Yavatmal, Maharashtra",
    crop: "Soybean Farmer",
    image: require("../assets/images/icon.png"),
    content:
      "The weather predictions and farming advice are incredibly accurate. I now plan my irrigation and spraying based on DigiShivar AI recommendations.",
  },
  {
    id: "3",
    name: "Ramesh Patil",
    location: "Nashik, Maharashtra",
    crop: "Grape Farmer",
    image: require("../assets/images/icon.png"),
    content:
      "DigiShivar helped me adopt drip irrigation, saving 40% water while improving grape quality.",
  },
];

const CARD_WIDTH = width - 90;
const CARD_MARGIN = 10;
const ITEM_WIDTH = CARD_WIDTH + (CARD_MARGIN * 2);

const FarmerStories: React.FC = () => {
  const flatListRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll effect
  useEffect(() => {
    const timer = setInterval(() => {
      const nextIndex = (currentIndex + 1) % stories.length;
      flatListRef.current?.scrollToOffset({
        offset: nextIndex * ITEM_WIDTH,
        animated: true,
      });
      setCurrentIndex(nextIndex);
    }, 4000); // Increased to 4 seconds for better UX

    return () => clearInterval(timer);
  }, [currentIndex]);

  // Handle manual swipe
  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / ITEM_WIDTH);
    if (index >= 0 && index < stories.length) {
      setCurrentIndex(index);
    }
  };

  const handleMomentumScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / ITEM_WIDTH);
    if (index >= 0 && index < stories.length) {
      setCurrentIndex(index);
    }
  };

  return (
    <View style={styles.section}>
      {/* ===== Heading Section ===== */}
      <Text style={styles.sectionLabel}>❝ Farmer Stories ❞</Text>
      <Text style={styles.sectionTitle}>What Farmers Say About Us</Text>
      <Text style={styles.sectionSubtitle}>
        Real experiences from farmers who have transformed their agricultural
        practices with DigiShivar AI's intelligent guidance and support.
      </Text>

      {/* ===== Auto-Scroll Carousel ===== */}
      <FlatList
        ref={flatListRef}
        data={stories}
        horizontal
        pagingEnabled={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        onScroll={handleScroll}
        onMomentumScrollEnd={handleMomentumScrollEnd}
        scrollEventThrottle={16}
        renderItem={({ item }) => (
          <View style={styles.card}>
            {/* Quote Icon */}
            <Text style={styles.quote}>❝</Text>

            {/* Stars Rating */}
            <View style={styles.stars}>
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <Text key={i} style={styles.star}>
                    ⭐
                  </Text>
                ))}
            </View>

            {/* Review Content */}
            <Text style={styles.content}>"{item.content}"</Text>

            {/* Farmer Info */}
            <Image source={item.image} style={styles.avatar} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.location}>📍 {item.location}</Text>
            <Text style={styles.crop}>🌱 {item.crop}</Text>
          </View>
        )}
        snapToInterval={ITEM_WIDTH}
        decelerationRate="fast"
        contentContainerStyle={{ paddingHorizontal: 20 }}
        getItemLayout={(data, index) => ({
          length: ITEM_WIDTH,
          offset: ITEM_WIDTH * index,
          index,
        })}
      />

      {/* ===== Dots Indicator ===== */}
      <View style={styles.dotsContainer}>
        {stories.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              currentIndex === index && styles.activeDot,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default FarmerStories;

const styles = StyleSheet.create({
  section: {
    paddingVertical: 30,
    alignItems: "center",
    backgroundColor: "#caf0caff",
    borderRadius:10 ,

  },
  sectionLabel: {
    fontSize: 14,
    color: "#16a34a",
    fontWeight: "600",
    marginBottom: 6,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#111827",
    textAlign: "center",
  },
  sectionSubtitle: {
    fontSize: 14,
    color: "#6b7280",
    textAlign: "center",
    marginTop: 6,
    marginBottom: 16,
    lineHeight: 20,
    paddingHorizontal: 20,
  },
  card: {
    width: CARD_WIDTH,
    marginHorizontal: CARD_MARGIN,
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 8,
    elevation: 5,
  },
  quote: {
    fontSize: 28,
    color: "#16a34a",
    marginBottom: 8,
  },
  stars: {
    flexDirection: "row",
    marginBottom: 8,
  },
  star: {
    fontSize: 16,
    color: "#fbbf24",
    marginHorizontal: 2,
  },
  content: {
    fontSize: 14,
    color: "#374151",
    fontStyle: "italic",
    textAlign: "center",
    marginBottom: 16,
    lineHeight: 20,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#111",
  },
  location: {
    fontSize: 13,
    color: "#6b7280",
    marginTop: 4,
  },
  crop: {
    fontSize: 13,
    color: "#16a34a",
    marginTop: 2,
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 12,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#d1d5db",
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "#16a34a",
  },
});