import React from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type IconSymbolProps = {
  name: keyof typeof Ionicons.glyphMap;
  size: number;
  color: string;
};

export const IconSymbol: React.FC<IconSymbolProps> = ({ name, size, color }) => {
  return <Ionicons name={name} size={size} color={color} />;
};
