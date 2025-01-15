// import { Tabs } from 'expo-router';
// import React from 'react';
// import { Platform } from 'react-native';

// import { HapticTab } from '@/components/HapticTab';
// import { IconSymbol } from '@/components/ui/IconSymbol';
// import TabBarBackground from '@/components/ui/TabBarBackground';
// import { Colors } from '@/constants/Colors';
// import { useColorScheme } from '@/hooks/useColorScheme';

// export default function TabLayout() {
//   const colorScheme = useColorScheme();

//   return (
//     <Tabs
//       screenOptions={{
//         tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
//         headerShown: false,
//         tabBarButton: HapticTab,
//         tabBarBackground: TabBarBackground,
//         tabBarStyle: Platform.select({
//           ios: {
//             // Use a transparent background on iOS to show the blur effect
//             position: 'absolute',
//           },
//           default: {},
//         }),
//       }}>
//       {/* <Tabs.Screen
//         name="TextInputExample"
//         options={{
//           title: 'TextInputExample',
//           tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
//         }}
//       /> */}
//       {/* <Tabs.Screen
//         name="NextScreen"
//         options={{
//           title: 'NextScreen',
//           tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
//         }}
//       /> */}
//     <Tabs.Screen
//         name="index"
//         options={{
//           title: 'screen',
//           tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
//         }}
//       />
//      <Tabs.Screen
//         name="TextInputExample"
//         options={{
//           title: 'TextInputExample',
//           tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
//         }}
//       /> <Tabs.Screen
//       name="NextScreen"
//       options={{
//         title: 'NextScreen',
//         tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
//       }}
//     /></Tabs>
//   );
// import React from 'react';
import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, Image } from 'react-native';
import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute', // Use a transparent background on iOS to show the blur effect
          },
          default: {},
        }),
      }}
    >
      {/* Tab for Home screen */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home', // Customize the title if needed
          tabBarIcon: ({ color, size }) => (
            <Image
            source={require('@/assets/images/home.png')} // ome bảo đường dẫn đúng tới ảnh
              style={{ width: size, height: size, tintColor: color }} // Căn chỉnh kích thước và màu sắc cho ảnh
            />
          ),
        }}
      />

      {/* Tab for TextInputExample */}
      <Tabs.Screen
        name="TextInputExample"
        options={{
          title: 'TextInputExample',
          tabBarIcon: ({ color, size }) => (
            <Image
            source={require('@/assets/images/partial-react-logo.png')} // Đảm bảo đường dẫn đúng tới ảnh
              style={{ width: size, height: size, tintColor: color }} // Căn chỉnh kích thước và màu sắc cho ảnh
            />
          ),
        }}
      />

      {/* Tab for NextScreen */}
      <Tabs.Screen
        name="NextScreen"
        options={{
          title: 'NextScreen',
          tabBarIcon: ({ color, size }) => (
            <Image
            source={require('@/assets/images/partial-react-logo.png')}// Đảm bảo đường dẫn đúng tới ảnh
              style={{ width: size, height: size, tintColor: color }} // Căn chỉnh kích thước và màu sắc cho ảnh
            />
          ),
        }}
      />
      
      {/* Add more screens here */}
    </Tabs>
  );
}


