import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const gameScreen = (navigation) => {

    let playerScore = 0;
    let computerScore = 0;

    function getRandomComputerResult(){
        const options = ['Rock', 'Paper', 'Scissors'];
        const randomIndex = Math.floor(Math.random() * options.length);
        return options[randomIndex];
    }
    
    function hasPlayerWonTheRound(player, computer) {
        return (
          (player === "Rock" && computer === "Scissors") ||
          (player === "Scissors" && computer === "Paper") ||
          (player === "Paper" && computer === "Rock")
        );
      }

  return (
    <View style={styles.container}>
      <Text>Rock, Paper, Scissors</Text>
      <Text>Player Score: </Text>
      <Text>Computer Score: </Text>
    </View>
  )
}

export default gameScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#FF6B67',
    },
})