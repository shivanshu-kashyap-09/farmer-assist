import React from 'react';
import { Platform, StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 20 }}>
      {/* Header with Image */}
      <View style={styles.header}>
        <Image
          source={require('../../assets/images/partial-react-logo.png')} // Adjust the path if necessary
          style={styles.reactLogo}
          resizeMode="contain"
        />
      </View>

      {/* Title and Wave Icon */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Welcome!</Text>
        <Ionicons name="hand-left-outline" size={32} color="#1D3D47" />
      </View>

      {/* Step 1 */}
      <View style={styles.stepContainer}>
        <Text style={styles.subtitle}>Step 1: Try it</Text>
        <Text style={styles.text}>
          Edit <Text style={styles.bold}>app/(tabs)/index.tsx</Text> to see changes. Press{' '}
          <Text style={styles.bold}>
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12',
            })}
          </Text>{' '}
          to open developer tools.
        </Text>
      </View>

      {/* Step 2 */}
      <View style={styles.stepContainer}>
        <Text style={styles.subtitle}>Step 2: Explore</Text>
        <Text style={styles.text}>
          Tap the Explore tab to learn more about what's included in this starter app.
        </Text>
      </View>

      {/* Step 3 */}
      <View style={styles.stepContainer}>
        <Text style={styles.subtitle}>Step 3: Get a fresh start</Text>
        <Text style={styles.text}>
          When you're ready, run{' '}
          <Text style={styles.bold}>npm run reset-project</Text> to get a fresh{' '}
          <Text style={styles.bold}>app</Text> directory. This will move the current{' '}
          <Text style={styles.bold}>app</Text> to <Text style={styles.bold}>app-example</Text>.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f9fafb',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
    position: 'relative',
    height: 200,
  },
  reactLogo: {
    width: 290,
    height: 178,
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1D3D47',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 4,
    color: '#333',
  },
  text: {
    fontSize: 14,
    color: '#555',
  },
  bold: {
    fontWeight: 'bold',
  },
  stepContainer: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});
