import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker'; // Assuming Expo is used; install with expo install expo-image-picker
import axios from 'axios'; // Install with npm install axios

const CropDiagnosisScreen = () => {
  // const [selectedCrop, setSelectedCrop] = useState('Cotton');
  // const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // Request permission to access camera roll
    if (Platform.OS !== 'web') {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission Denied', 'Sorry, we need camera roll permissions to make this work!');
        return;
      }
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled && result.assets && result.assets.length > 0) {
      setImage(result.assets[0].uri);
    }
  };

  const diagnose = async () => {
    if (!image) {
      Alert.alert('No Image', 'Please select an image first.');
      return;
    }

    // Prepare form data for backend
    const formData = new FormData();
    formData.append('image', {
      uri: image,
      type: 'image/jpeg', // Adjust based on image type
      name: 'crop_image.jpg',
    });

    try {
      // Replace with your backend endpoint URL
      const response = await axios.post('https://your-backend-url.com/predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      // Handle response, e.g., show prediction
      Alert.alert('Diagnosis', JSON.stringify(response.data));
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to send image to backend.');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.uploadButton} onPress={pickImage}>
        <Text style={styles.uploadText}>↑ AI Image Analysis</Text>
      </TouchableOpacity>
 

      <TouchableOpacity style={styles.diagnoseButton} onPress={diagnose}>
        <Text style={styles.diagnoseText}>Diagnose with Krushi Doctor</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  uploadButton: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    alignItems: 'center',
  },
  uploadText: {
    color: '#000',
    fontWeight: 'bold',
  },
  imageText: {
    marginBottom: 20,
    color: 'green',
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 20,
    backgroundColor: '#f0f0f0',
  },
  textInput: {
    height: 100,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    textAlignVertical: 'top',
  },
  diagnoseButton: {
    backgroundColor: '#ff9999',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  diagnoseText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default CropDiagnosisScreen;