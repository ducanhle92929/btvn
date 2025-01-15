import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LyricDisplay = () => {
  return (
    <View style={styles.container}>
      <View style={styles.lyricContainer}>
        <Text style={styles.text}>
          Em vào đời bằng <Text style={styles.redText}>vàng đỏ</Text> anh vào đời bằng{'\n'}
          <Text style={styles.yellowText}>nước trà</Text>{'\n'}{'\n'}
          Bằng cơn mưa thơm <Text style={styles.whiteText}>mùi đất</Text> và <Text style={styles.italicText}>bằng hoa dại mọc trước nhà</Text>{'\n'}{'\n'}
          <Text style={styles.italicTextt}>Em vào đời bằng kế hoạch anh vào đời bằng mộng mơ</Text>{'\n'}{'\n'}
          Lý trí em là <Text style={styles.spacedText}>c ô n g c u</Text>{'\n'}
          còn trái tim anh là <Text style={styles.spacedText}>đ ô n g{'\n'}c ơ</Text>{'\n'}{'\n'}
          <View style={styles.specialTextContainer}>
            <Text style={styles.Text}>Em vào đời nhiều đồng nghiệp anh vào đời</Text>
            <Text style={styles.Textt}>nhiều thân tình</Text>
          </View>
          {'\n'}{'\n'}
         <Text style={styles.orangeText}>Anh chỉ muốn chân mình đạp đất không{'\n'}muốn đạp ai dưới chân mình</Text>{'\n'}{'\n'}
          <Text style={styles.whiteTextt}> Em vào đời bằng <Text style={styles.whiteText}>mây trắng</Text> em vào đời{'\n'}bằng</Text> <Text style={styles.yellowText}>nắng xanh</Text>{'\n'}{'\n'}
          <Text style={styles.whiteTextt}> Em vào đời bằng <Text style={styles.yellowText}>đại lộ</Text> và con đường đó{'\n'}giờ </Text> vắng anh
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lyricContainer: {
    width: 350,
    padding: 3,
    backgroundColor: '#0000FF', // Royal blue background
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    color: '#FFFFFF',
    padding: 5,
    lineHeight: 24,
  },
  redText: {
    color: '#FF0000',
    fontWeight: 'bold',
  },
  yellowText: {
    color: '#FFFF00',
  },
  whiteText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 20,
  },
  whiteTextt: {
    color: '#21130d',
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 24,
  },
  orangeText: {
    color: '#FFA500',
    paddingLeft: 20,
    
 },
  italicText: {
    fontSize: 11,
    fontStyle: 'italic',
  },
  italicTextt: {
    color: '#FFD700',
    fontSize: 15,
    fontStyle: 'italic',
    lineHeight: 24,
  },
  spacedText: {
    letterSpacing: 4,
    textDecorationLine: 'underline',
  },
  specialTextContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  Text: {
    left: 10,
    color: '#FFFFFF',
  },
  Textt: {
    left: 10,
    	top : 5,
    color: '#FFD700',
    alignSelf: 'flex-end',
  },
});

export default LyricDisplay;