import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
// import Navbar from '@/scripts/Navbar';

const loaiCafe = ['All', 'Cappuccino', 'Espresso', 'Americano', 'Macchiato'];

const cacSanPhamCafe = [
  {
    id: '1',
    ten: 'Cappuccino',
    moTa: 'Với Sữa Hơi',
    gia: 4.20,
    danhGia: 4.5,
    hinhAnh: require('@/assets/images/cafe.png'),
  },
  {
    id: '2',
    ten: 'Cappuccino',
    moTa: 'Với Bọt Sữa',
    gia: 4.20,
    danhGia: 4.2,
    hinhAnh: require('@/assets/images/cafe.png'),
  },
  {
    id: '3',
    ten: 'Cappuccino',
    moTa: 'Với Sữa Hơi',
    gia: 4.20,
    danhGia: 4.5,
    hinhAnh: require('@/assets/images/cafe.png'),
  },
  {
    id: '4',
    ten: 'Cappuccino',
    moTa: 'Với Bọt Sữa',
    gia: 4.20,
    danhGia: 4.2,
    hinhAnh: require('@/assets/images/cafe.png'),
  },
];

const cacSanPhamHatCafe = [
  {
    id: '1',
    ten: 'Hạt Robusta',
    moTa: 'Nướng Trung Bình',
    gia: 4.20,
    hinhAnh: require('@/assets/images/cafe.png'),
  },
  {
    id: '2',
    ten: 'Cappuccino',
    moTa: 'Với Sữa Hơi',
    gia: 4.20,
    hinhAnh: require('@/assets/images/cafe.png'),
  }, {
    id: '3',
    ten: 'Hạt Robusta',
    moTa: 'Nướng Trung Bình',
    gia: 4.20,
    hinhAnh: require('@/assets/images/cafe.png'),
  },
  {
    id: '4',
    ten: 'Cappuccino',
    moTa: 'Với Sữa Hơi',
    gia: 4.20,
    hinhAnh: require('@/assets/images/cafe.png'),
  },
];

export default function TrangChu() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image
            source={require('@/assets/images/settings.png')}
            style={styles.menuIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('@/assets/images/name.png')}
            style={styles.profileImage}
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Tìm cà phê tốt nhất{'\n'}cho bạn</Text>

      <View style={styles.searchContainer}>
        <Image
          source={require('@/assets/images/search.png')}
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Tìm Cà Phê..."
          placeholderTextColor="#666"
        />
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.typeScroll}
      >
        {loaiCafe.map((loai, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.typeButton,
              index === 0 && styles.activeTypeButton,
            ]}
          >
            <Text
              style={[
                styles.typeText,
                index === 0 && styles.activeTypeText,
              ]}
            >
              {loai}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <ScrollView showsVerticalScrollIndicator={false}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.coffeeScroll}
        >
          {cacSanPhamCafe.map((item) => (
            <View key={item.id} style={styles.coffeeCard}>
              <Image source={item.hinhAnh} style={styles.coffeeImage} />
              <View style={styles.ratingContainer}>
                <Image
                  source={require('@/assets/images/star.png')}
                  style={styles.starIcon}
                />
                <Text style={styles.rating}>{item.danhGia}</Text>
              </View>
              <Text style={styles.coffeeName}>{item.ten}</Text>
              <Text style={styles.coffeeDescription}>{item.moTa}</Text>
              <View style={styles.priceContainer}>
                <Text style={styles.price}>$ {item.gia}</Text>
                <TouchableOpacity style={styles.addButton}>
                  <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>

        <Text style={styles.sectionTitle}>Hạt Cà Phê</Text>

        <View style={styles.beansGrid}>
          {cacSanPhamHatCafe.map((item) => (
            <View key={item.id} style={styles.beanCard}>
              <Image source={item.hinhAnh} style={styles.beanImage} />
              <Text style={styles.beanName}>{item.ten}</Text>
              <Text style={styles.beanDescription}>{item.moTa}</Text>
              <View style={styles.priceContainer}>
                <Text style={styles.price}>$ {item.gia}</Text>
                <TouchableOpacity style={styles.addButton}>
                  <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* <Navbar /> */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#0C0F14',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
  },
  menuIcon: {
    width: 34,
    height: 34,
    // tintColor: '#FFFFFF',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  title: {
    fontSize: 28,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2C2C2C',
    borderRadius: 15,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  searchIcon: {
    width: 20,
    height: 20,
    tintColor: '#666',
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    color: '#FFFFFF',
  },
  typeScroll: {
    marginBottom: 20,
  },
  typeButton: {
    paddingHorizontal: 20,
    paddingVertical: 0,
    marginRight: 0,
    // marginBottom: 10, 
    borderRadius: 20,
    // position: 'relative',
  },
 
 
    activeTypeButton: {
    marginTop: 0,
    borderBottomWidth: 2,
    marginBottom: 0,   
     borderBottomColor: '#D17842',
  },
  typeText: {
    color: '#666',
    fontSize: 16,
    paddingBottom: 20,
    marginEnd: 0,
  },
  activeTypeText: {
    color: '#D17842',
  },
  coffeeScroll: {
    marginBottom: 20,
  },
  coffeeCard: {
    width: 200,
    backgroundColor: '#2C2C2C',
    borderRadius: 20,
    padding: 15,
    top:0,
    marginRight: 20,
  },
  coffeeImage: {
    width: 320,
    height: 140,
    right :75,
    top :5,
    alignItems : 'center',
    paddingHorizontal : 5,
    borderRadius: 30,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 20,
    left: 20,
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: 5,
    borderRadius: 10,
  },
  starIcon: {
    width: 12,
    height: 12,
    tintColor: '#D17842',
    marginRight: 5,
  },
  rating: {
    color: '#FFFFFF',
    fontSize: 12,
  },
  coffeeName: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  coffeeDescription: {
    color: '#666',
    fontSize: 12,
    marginTop: 5,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  price: {
    color: '#D17842',
    fontSize: 16,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#D17842',
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  beansGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  beanCard: {
    width: '48%',
    backgroundColor: '#2C2C2C',
    borderRadius: 20,
    padding: 10,
    marginBottom: 70,
    
  },
  beanImage: {
    width: 270,
    height: 140,
    right :60,
    top :5,
    alignItems : 'center',
    borderRadius: 30,
  },
  beanName: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  beanDescription: {
    color: '#666',
    fontSize: 12,
    marginTop: 5,
  },
});
