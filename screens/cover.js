import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';

const Cover = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rock Paper Scissors</Text>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/rps.jpg')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <TouchableOpacity
        style={styles.startBtn}
        onPress={() => navigation.navigate('Game')}
      >
        <Text style={styles.startText}>Play</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Cover;

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF6B67',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: 'white',
  },
  imageContainer: {
    width: width * 0.8,
    height: height * 0.4,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  startBtn: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  startText: {
    fontSize: 18,
    color: '#FF6B67',
    fontWeight: 'bold',
  },
});
