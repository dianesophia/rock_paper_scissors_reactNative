import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React,{useState} from 'react'
import axios from 'axios'

const gameScreen = (navigation) => {

  const [player, setPlayer] = useState("");
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [score, setScore] = useState(0);

  const handleSave = async () => {
    try {
        await axios.post("http://localhost:4324/save", { player, score: playerScore });
        console.log("success");
       navigate("/");
    } catch (err) {
        console.log(err);
    }
}


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

      function getRoundResults(userOption) {
        const computerResult = getRandomComputerResult();
      
        if (hasPlayerWonTheRound(userOption, computerResult)) {
          setPlayerScore(playerScore + 1);
          return `Player wins! ${userOption} beats ${computerResult}`;
        } else if (computerResult === userOption) {
          return `It's a tie! Both chose ${userOption}`;
        } else {
          setComputerScore(computerScore + 1);
          return `Computer wins! ${computerResult} beats ${userOption}`;
        }
      }

    function saveResult(){

    }

    const playRound = (playerChoice) => {
      const computerChoice = getRandomComputerResult();
      const result = getRoundResults(playerChoice, computerChoice);
      console.log(result);
    }

  return (
    <View style={styles.container}>
      <Text>Rock, Paper, Scissors</Text>
      <Text>Player Score: {playerScore}</Text>
      <Text>Computer Score: {computerScore}</Text>
      <Text>Choose an option </Text>

      <TouchableOpacity onPress={() => playRound("Rock")}>
        <Text>Rock</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => playRound("Paper")}>
        <Text>Paper</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => playRound("Scissors")}>
        <Text>Scissors</Text>
      </TouchableOpacity>

    <TextInput 
      placeholder='Player name'
      value={player}
      onChangeText={setPlayer}
      />

    <TouchableOpacity onPress={() => {handleSave()}}>
      <Text>Save Result</Text>
    </TouchableOpacity>

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