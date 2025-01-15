import React from 'react';
import { View, StyleSheet } from 'react-native';

const ViewComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    // justifyContent: 'center', // Căn giữa theo chiều dọc
    alignItems: 'center', // Căn giữa theo chiều ngang
    backgroundColor: '#f8f9fa', // Màu nền tùy ý
  },
  imageContainer: {
    width: 200, // Chiều rộng của "ảnh"
    height: 200, // Chiều cao của "ảnh"
    borderRadius: 20, // Bo góc
    backgroundColor: 'blue', // Giả sử đây là màu thay thế cho ảnh
    marginTop :80,},
});

export default ViewComponent;
