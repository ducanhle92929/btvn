import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function BeanDetailsScreen() {
  const [selectedSize, setSelectedSize] = useState('250gm');

  return (
    <ScrollView style={styles.container}>
      {/* Image Section */}
      <View style={styles.imageContainer}>
        <Image 
          // source={{ uri: 'https://example.com/coffee-beans.jpg' }} // Đổi link này thành hình ảnh của bạn
          source={require('@/assets/images/cafe.png')}
          style={styles.image}
        />
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backButtonText}>{"<"}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.favoriteButton}>
          <Text style={styles.favoriteButtonText}>♥</Text>
        </TouchableOpacity>
      </View>

      {/* Details Section */}
      <View style={styles.detailsContainer}>
        {/* Title */}
        <View style={styles.Container}>
        <Text style={styles.title}>Robusta Beans</Text>
        <Text style={styles.subtitle}>From Africa</Text>

        {/* Tags */}
        <View style={styles.tagsContainer}>
          <View style={styles.tag}>
            <Text style={styles.tagText}>Bean</Text>
          </View>
          <View style={styles.tag}>
            <Text style={styles.tagText}>Africa</Text>
          </View>
          <View style={styles.tag}>
            <Text style={styles.tagText}>Medium Roasted</Text>
          </View>
        </View>
        </View>
        {/* Rating */}
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>★ 4.5</Text>
          <Text style={styles.ratingCount}>(6,879)</Text>
        </View>

        {/* Description */}
        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.description}>
          Arabica beans are by far the most popular type of coffee beans, making up about 60% of the world's coffee. These tasty beans originated many centuries ago in the highlands of Ethiopia, and may even be the first coffee beans ever consumed!
        </Text>

        {/* Size Selection */}
        <Text style={styles.sectionTitle}>Size</Text>
        <View style={styles.sizeContainer}>
          {['250gm', '500gm', '1000gm'].map((size) => (
            <TouchableOpacity
              key={size}
              style={[
                styles.sizeButton,
                selectedSize === size && styles.selectedSizeButton,
              ]}
              onPress={() => setSelectedSize(size)}
            >
              <Text
                style={[
                  styles.sizeText,
                  selectedSize === size && styles.selectedSizeText,
                ]}
              >
                {size}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Price and Add to Cart */}
        <View style={styles.cartContainer}>
          <Text style={styles.price}>$10.50</Text>
          <TouchableOpacity style={styles.cartButton}>
            <Text style={styles.cartButtonText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop :0,
    backgroundColor: '#1A1A1A',
  },
  imageContainer: {
    // position: 'relative',
    height: 280,

    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '230%',
    // resizeMode: 'cover',
    // marginTop :0,
 
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    backgroundColor: '#00000088',
    padding: 10,
    borderRadius: 20,
  },
  backButtonText: {
    color: '#FFF',
    fontSize: 18,
  },
  favoriteButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    backgroundColor: '#00000088',
    padding: 10,
    borderRadius: 20,
  },
  favoriteButtonText: {
    color: '#FFF',
    fontSize: 18,
  },
  detailsContainer: {
    padding: 20,
  },
  Container:{


  },
  title: {
    fontSize: 24,
    color: '#FFF',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#A9A9A9',
    marginVertical: 5,
  },
  tagsContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  tag: {
    backgroundColor: '#2A2A2A',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
    marginRight: 10,
  },
  tagText: {
    color: '#FFF',
    fontSize: 12,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  ratingText: {
    color: '#FFC107',
    fontSize: 18,
    fontWeight: 'bold',
  },
  ratingCount: {
    color: '#A9A9A9',
    fontSize: 14,
    marginLeft: 5,
  },
  sectionTitle: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
    marginVertical: 10,
  },
  description: {
    color: '#D3D3D3',
    fontSize: 14,
    lineHeight: 22,
  },
  sizeContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  sizeButton: {
    borderWidth: 1,
    borderColor: '#FFF',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginRight: 10,
  },
  selectedSizeButton: {
    backgroundColor: '#FF6F00',
    borderColor: '#FF6F00',
  },
  sizeText: {
    color: '#FFF',
    fontSize: 14,
  },
  selectedSizeText: {
    color: '#000',
    fontWeight: 'bold',
  },
  cartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  price: {
    fontSize: 24,
    color: '#FFF',
    fontWeight: 'bold',
  },
  cartButton: {
    backgroundColor: '#FF6F00',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  cartButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
