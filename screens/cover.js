import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';

const Cover = ({navigation}) => {
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
        style={styles.startBnt}
        onPress={() => navigation.navigate('Game')}
        >
        <Text style={styles.start}>Play</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Cover;

const { width } = Dimensions.get('window'); 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF6B67',
    alignItems: 'center',
  },
  title:{
    fontFamily: '',
    textAlign: 'center', 
    marginTop: 30,
    padding: 20,

  },
  imageContainer: {
    width: width, 
    alignItems: 'center', // Center horizontally
    justifyContent: 'center', // Center vertically
    marginTop: 50,
  },
  image: {
    width: width * 1,
    height: '100%', // Use 100% of container height
    aspectRatio: 1, // Maintain aspect ratio
  },
  startBnt:{
    backgroundColor: 'white'

  },
});
