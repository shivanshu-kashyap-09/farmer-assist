import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import AiChatScreen from "../app/aichat"

type Story = {
  id: string;
  image: any;  // require('./path.jpg') or { uri: '...' }
  title: string;
  content: string;
};

const stories: Story[] = [
  {
    id: '1',
   image: require('../assets/images/icon.png'),
    title: 'Krushi Diary Success',
    content: 'Sita’s Krushi Diary helped her record all expenses and optimize fertilizer use…',
  },
  {
    id: '2',
    image: require('../assets/images/icon.png'),
    title: 'Krushi Diary Success',
    content: 'Sita’s Krushi Diary helped her record all expenses and optimize fertilizer use…',
  },
  // Add more stories as needed
];

const FarmerStoryScreen: React.FC = () => (
  <ScrollView contentContainerStyle={styles.container}>
    <Text style={styles.heading}>Farmer Stories</Text>
    {stories.map((story) => (
      <View key={story.id} style={styles.card}>
        <Image source={story.image} style={styles.image} />
        <Text style={styles.storyTitle}>{story.title}</Text>
        <Text style={styles.storyContent}>{story.content}</Text>
      </View>
    ))}
<AiChatScreen/>
  </ScrollView>
);

const styles = StyleSheet.create({
    container: {
  padding: 16,
  backgroundColor: '#f0f4f8',
  borderRadius: 20,
  margin: 10,
},

heading: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#0b0b0bff',
    marginBottom: 20,
    textAlign: 'center',
},
card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    // shadow for iOS
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 8,
    // elevation for Android
    elevation: 4,
  },
  image: {
      width: '100%',
      height: 180,
      borderRadius: 10,
    marginBottom: 12,
},
  storyTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
},
  storyContent: {
      fontSize: 14,
      color: '#555',
    lineHeight: 20,
},
});

export default FarmerStoryScreen;
