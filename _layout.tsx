import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, Dimensions, Image } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

const { width } = Dimensions.get('window');

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#FFD700', // Màu tab đang chọn
        tabBarInactiveTintColor: '#888', // Màu tab không được chọn
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: Platform.select({
          ios: {
            backgroundColor: '#0C0F14', // Màu nền của tab bar
            position: 'absolute',
            bottom: 20, // Khoảng cách từ cạnh dưới
            marginHorizontal: width * 0.05, // Căn giữa theo chiều ngang
            borderRadius: 25, // Bo góc tab bar
            height: 60, // Chiều cao tab bar
          },
          android: {
            backgroundColor: '#1E1E1E', // Màu nền tab bar trên Android
            position: 'absolute',
            bottom: 20, // Khoảng cách từ cạnh dưới
            marginHorizontal: width * 0.05, // Căn giữa theo chiều ngang
            borderRadius: 25, // Bo góc tab bar
            height: 60, // Chiều cao tab bar
          },
        }),
      }}>
      {/* Tab 1: Home */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('@/assets/images/home.png')} // File icon cho tab Home
              style={{ width: size, height: size, tintColor: color }} // Căn chỉnh kích thước và màu
            />
          ),
        }}
      />

      {/* Tab 2: Explore */}
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('@/assets/images/shopping.png')} // File icon cho tab Explore
              style={{ width: size, height: size, tintColor: color }} // Căn chỉnh kích thước và màu
            />
          ),
        }}
      />
    </Tabs>
  );


// }

// import React from 'react';
// import { Tabs } from 'expo-router';
// import React from 'react';
// import { Platform, Image } from 'react-native';
// import { HapticTab } from '@/components/HapticTab';
// import TabBarBackground from '@/components/ui/TabBarBackground';
// import { Colors } from '@/constants/Colors';
// import { useColorScheme } from '@/hooks/useColorScheme';

// export default function TabLayout() {
//   const colorScheme = useColorScheme();

//   return (
//     <Tabs
//       screenOptions={{
//         tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint, // Màu sắc của icon khi tab được chọn
//         headerShown: false, // Ẩn tiêu đề header
//         tabBarButton: HapticTab, // Sử dụng thành phần tùy chỉnh cho nút tab
//         tabBarBackground: TabBarBackground, // Sử dụng nền tùy chỉnh cho tab bar
//         tabBarStyle: {
//           backgroundColor: '#0C0F14', // Màu nền của tab bar
//           borderTopWidth: 0, // Bỏ border trên iOS (nếu có)
//           height: 60, // Đặt chiều cao cho tab bar
//           position: 'absolute', // Đặt vị trí tab bar
//           ...(Platform.OS === 'ios' && {
//             backgroundColor: '#0C0F14', // Màu nền cho iOS
//             position: 'absolute', // Đảm bảo tab bar ở vị trí tuyệt đối trên iOS
//             borderTopWidth: 0, // Bỏ border top cho iOS
//           }),
//         },
//       }}
//     >
//       {/* Tab for Home screen */}
//       <Tabs.Screen
//         name="index"
//         options={{
//           title: 'Home', // Tiêu đề của tab
//           tabBarIcon: ({ color, size }) => (
//             <Image
//               source={require('@/assets/images/home.png')} // Đảm bảo đường dẫn đúng tới ảnh
//               style={{ width: size, height: size, tintColor: color }} // Căn chỉnh kích thước và màu sắc cho ảnh
//             />
//           ),
//         }}
//       />

//       {/* Tab for TextInputExample */}
//       <Tabs.Screen
//         name="TextInputExample"
//         options={{
//           title: 'TextInputExample', // Tiêu đề của tab
//           tabBarIcon: ({ color, size }) => (
//             <Image
//               source={require('@/assets/images/partial-react-logo.png')} // Đảm bảo đường dẫn đúng tới ảnh
//               style={{ width: size, height: size, tintColor: color }} // Căn chỉnh kích thước và màu sắc cho ảnh
//             />
//           ),
//         }}
//       />

//       {/* Tab for NextScreen */}
//       <Tabs.Screen
//         name="NextScreen"
//         options={{
//           title: 'NextScreen', // Tiêu đề của tab
//           tabBarIcon: ({ color, size }) => (
//             <Image
//               source={require('@/assets/images/partial-react-logo.png')} // Đảm bảo đường dẫn đúng tới ảnh
//               style={{ width: size, height: size, tintColor: color }} // Căn chỉnh kích thước và màu sắc cho ảnh
//             />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="explore"
//         options={{
//           title: 'exploreeen', // Tiêu đề của tab
//           tabBarIcon: ({ color, size }) => (
//             <Image
//               source={require('@/assets/images/partial-react-logo.png')} // Đảm bảo đường dẫn đúng tới ảnh
//               style={{ width: size, height: size, tintColor: color }} // Căn chỉnh kích thước và màu sắc cho ảnh
//             />
//           ),
//         }}
//       />
//       {/* Thêm các màn hình khác nếu cần */}
//     </Tabs>
//   );
}
