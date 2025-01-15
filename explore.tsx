// // import { StyleSheet, Image, Platform } from 'react-native';

// // import { Collapsible } from '@/components/Collapsible';
// // import { ExternalLink } from '@/components/ExternalLink';
// // import ParallaxScrollView from '@/components/ParallaxScrollView';
// // import { ThemedText } from '@/components/ThemedText';
// // import { ThemedView } from '@/components/ThemedView';
// // import { IconSymbol } from '@/components/ui/IconSymbol';

// // export default function TabTwoScreen() {
// //   return (
// //     <ParallaxScrollView
// //       headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
// //       headerImage={
// //         <IconSymbol
// //           size={310}
// //           color="#808080"
// //           name="chevron.left.forwardslash.chevron.right"
// //           style={styles.headerImage}
// //         />
// //       }>
// //       <ThemedView style={styles.titleContainer}>
// //         <ThemedText type="title">Explore</ThemedText>
// //       </ThemedView>
// //       <ThemedText>This app includes example code to help you get started.</ThemedText>
// //       <Collapsible title="File-based routing">
// //         <ThemedText>
// //           This app has two screens:{' '}
// //           <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> and{' '}
// //           <ThemedText type="defaultSemiBold">app/(tabs)/explore.tsx</ThemedText>
// //         </ThemedText>
// //         <ThemedText>
// //           The layout file in <ThemedText type="defaultSemiBold">app/(tabs)/_layout.tsx</ThemedText>{' '}
// //           sets up the tab navigator.
// //         </ThemedText>
// //         <ExternalLink href="https://docs.expo.dev/router/introduction">
// //           <ThemedText type="link">Learn more</ThemedText>
// //         </ExternalLink>
// //       </Collapsible>
// //       <Collapsible title="Android, iOS, and web support">
// //         <ThemedText>
// //           You can open this project on Android, iOS, and the web. To open the web version, press{' '}
// //           <ThemedText type="defaultSemiBold">w</ThemedText> in the terminal running this project.
// //         </ThemedText>
// //       </Collapsible>
// //       <Collapsible title="Images">
// //         <ThemedText>
// //           For static images, you can use the <ThemedText type="defaultSemiBold">@2x</ThemedText> and{' '}
// //           <ThemedText type="defaultSemiBold">@3x</ThemedText> suffixes to provide files for
// //           different screen densities
// //         </ThemedText>
// //         <Image source={require('@/assets/images/react-logo.png')} style={{ alignSelf: 'center' }} />
// //         <ExternalLink href="https://reactnative.dev/docs/images">
// //           <ThemedText type="link">Learn more</ThemedText>
// //         </ExternalLink>
// //       </Collapsible>
// //       <Collapsible title="Custom fonts">
// //         <ThemedText>
// //           Open <ThemedText type="defaultSemiBold">app/_layout.tsx</ThemedText> to see how to load{' '}
// //           <ThemedText style={{ fontFamily: 'SpaceMono' }}>
// //             custom fonts such as this one.
// //           </ThemedText>
// //         </ThemedText>
// //         <ExternalLink href="https://docs.expo.dev/versions/latest/sdk/font">
// //           <ThemedText type="link">Learn more</ThemedText>
// //         </ExternalLink>
// //       </Collapsible>
// //       <Collapsible title="Light and dark mode components">
// //         <ThemedText>
// //           This template has light and dark mode support. The{' '}
// //           <ThemedText type="defaultSemiBold">useColorScheme()</ThemedText> hook lets you inspect
// //           what the user's current color scheme is, and so you can adjust UI colors accordingly.
// //         </ThemedText>
// //         <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
// //           <ThemedText type="link">Learn more</ThemedText>
// //         </ExternalLink>
// //       </Collapsible>
// //       <Collapsible title="Animations">
// //         <ThemedText>
// //           This template includes an example of an animated component. The{' '}
// //           <ThemedText type="defaultSemiBold">components/HelloWave.tsx</ThemedText> component uses
// //           the powerful <ThemedText type="defaultSemiBold">react-native-reanimated</ThemedText>{' '}
// //           library to create a waving hand animation.
// //         </ThemedText>
// //         {Platform.select({
// //           ios: (
// //             <ThemedText>
// //               The <ThemedText type="defaultSemiBold">components/ParallaxScrollView.tsx</ThemedText>{' '}
// //               component provides a parallax effect for the header image.
// //             </ThemedText>
// //           ),
// //         })}
// //       </Collapsible>
// //     </ParallaxScrollView>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   headerImage: {
// //     color: '#808080',
// //     bottom: -90,
// //     left: -35,
// //     position: 'absolute',
// //   },
// //   titleContainer: {
// //     flexDirection: 'row',
// //     gap: 8,
// //   },
// // });
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// interface Player {
//   name: string;
//   goals: number;
// }
// // Danh sách cầu thủ ban đầu
// const players = [
//   { name: 'Messi', goals: 30 },
//   undefined,
//   { name: 'Ronaldo', goals: 28 },
//   { name: 'Neymar', goals: 22 },
//   { goals: 2 },
//   { name: 'Mbappé', goals: 25 },
//   { name: 'Pele', goals: null },
// ];

// // Hàm kiểm tra cầu thủ hợp lệ
// const isValidPlayer = (player) => {
//   return player?.name && typeof player.goals === 'number';
// };

// // Hàm xử lý
// const processPlayers = (players) => {
//   // Lọc danh sách cầu thủ hợp lệ
//   const validPlayers = players.filter(isValidPlayer);

//   // Tìm cầu thủ ghi nhiều bàn thắng nhất
//   const topScorer = validPlayers.reduce((max, player) =>
//     player.goals > max.goals ? player : max,
//     { name: '', goals: 0 }
//   );

//   return { validPlayers, topScorer };
// };

// export default function App() {
//   const { validPlayers, topScorer } = processPlayers(players);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Danh sách cầu thủ hợp lệ:</Text>
//       {validPlayers.map((player, index) => (
//         <Text key={index} style={styles.text}>
//           {player.name}: {player.goals} bàn
//         </Text>
//       ))}

//       <Text style={styles.title}>
//         Cầu thủ ghi nhiều bàn thắng nhất: {topScorer.name} ({topScorer.goals} bàn)
//       </Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     marginTop :40,
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 12,
//   },
//   text: {
//     fontSize: 16,
//     marginBottom: 8,
//   },
// });