// import React from 'react';
// import { Image, Platform, StyleSheet, ScrollView, View, Text, TouchableOpacity, Linking } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';

// export default function TabTwoScreen() {
//   return (
//     <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 20 }}>
//       <View style={styles.header}>
//         <Ionicons
//           name="chevron-back-outline"
//           size={150}
//           color="#808080"
//           style={styles.headerImage}
//         />
//         <Text style={styles.title}>Explore</Text>
//       </View>

//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Example Info</Text>
//         <Text style={styles.sectionText}>
//           This app includes example code to help you get started.
//         </Text>
//       </View>

//       <Collapsible title="File-based routing">
//         <Text style={styles.sectionText}>
//           This app has two screens:{' '}
//           <Text style={styles.bold}>app/(tabs)/index.tsx</Text> and{' '}
//           <Text style={styles.bold}>app/(tabs)/explore.tsx</Text>
//         </Text>
//         <Text style={styles.sectionText}>
//           The layout file in <Text style={styles.bold}>app/(tabs)/_layout.tsx</Text> sets up the tab navigator.
//         </Text>
//         <ExternalLink href="https://docs.expo.dev/router/introduction" label="Learn more" />
//       </Collapsible>

//       <Collapsible title="Android, iOS, and web support">
//         <Text style={styles.sectionText}>
//           You can open this project on Android, iOS, and the web. To open the web version, press{' '}
//           <Text style={styles.bold}>w</Text> in the terminal running this project.
//         </Text>
//       </Collapsible>

//       <Collapsible title="Images">
//         <Text style={styles.sectionText}>
//           For static images, you can use the <Text style={styles.bold}>@2x</Text> and{' '}
//           <Text style={styles.bold}>@3x</Text> suffixes to provide files for different screen densities.
//         </Text>
//         <Image
//           source={require('../assets/images/react-logo.png')} // Adjust this path as per your assets folder
//           style={{ width: 100, height: 100, alignSelf: 'center', marginVertical: 10 }}
//         />
//         <ExternalLink href="https://reactnative.dev/docs/images" label="Learn more" />
//       </Collapsible>

//       <Collapsible title="Custom fonts">
//         <Text style={styles.sectionText}>
//           Open <Text style={styles.bold}>app/_layout.tsx</Text> to see how to load{' '}
//           <Text style={{ fontFamily: 'SpaceMono' }}>custom fonts such as this one.</Text>
//         </Text>
//         <ExternalLink href="https://docs.expo.dev/versions/latest/sdk/font" label="Learn more" />
//       </Collapsible>

//       <Collapsible title="Light and dark mode components">
//         <Text style={styles.sectionText}>
//           This template has light and dark mode support. The{' '}
//           <Text style={styles.bold}>useColorScheme()</Text> hook lets you inspect what's the user's current color scheme is, and so you can adjust UI colors accordingly.
//         </Text>
//         <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/" label="Learn more" />
//       </Collapsible>

//       <Collapsible title="Animations">
//         <Text style={styles.sectionText}>
//           This template includes an example of an animated component. The{' '}
//           <Text style={styles.bold}>components/HelloWave.tsx</Text> component uses the powerful{' '}
//           <Text style={styles.bold}>react-native-reanimated</Text> library to create a waving hand animation.
//         </Text>
//         {Platform.OS === 'ios' && (
//           <Text style={styles.sectionText}>
//             The <Text style={styles.bold}>components/ParallaxScrollView.tsx</Text> component provides a parallax effect for the header image.
//           </Text>
//         )}
//       </Collapsible>
//     </ScrollView>
//   );
// }

// function Collapsible({ title, children }) {
//   const [open, setOpen] = React.useState(false);
//   return (
//     <View style={styles.collapsibleContainer}>
//       <TouchableOpacity onPress={() => setOpen(!open)} style={styles.collapsibleHeader}>
//         <Text style={styles.collapsibleTitle}>{title}</Text>
//         <Ionicons name={open ? "chevron-up-outline" : "chevron-down-outline"} size={20} color="#333" />
//       </TouchableOpacity>
//       {open && <View style={styles.collapsibleContent}>{children}</View>}
//     </View>
//   );
// }

// function ExternalLink({ href, label }) {
//   return (
//     <TouchableOpacity onPress={() => Linking.openURL(href)}>
//       <Text style={styles.link}>{label}</Text>
//     </TouchableOpacity>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: '#f9fafb',
//   },
//   header: {
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   headerImage: {
//     bottom: -20,
//   },
//   title: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     marginTop: -40,
//     textAlign: 'center',
//   },
//   section: {
//     marginBottom: 20,
//   },
//   sectionTitle: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },
//   sectionText: {
//     fontSize: 14,
//     color: '#333',
//     marginBottom: 8,
//   },
//   bold: {
//     fontWeight: 'bold',
//   },
//   collapsibleContainer: {
//     marginBottom: 16,
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     padding: 10,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   collapsibleHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   collapsibleTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   collapsibleContent: {
//     marginTop: 10,
//   },
//   link: {
//     color: '#1e40af',
//     textDecorationLine: 'underline',
//     fontSize: 14,
//     marginTop: 5,
//   },
// });
