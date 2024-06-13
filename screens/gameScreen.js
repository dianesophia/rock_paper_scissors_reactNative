  import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native'
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
        <Text style={styles.gameTitle}>Rock, Paper, Scissors</Text>

        <View style={styles.scores}>
        <Text style={styles.plyrScore}>Player Score: {playerScore}</Text>
        <Text style={styles.cmptrScore}>Computer Score: {computerScore}</Text>
        </View>

        <Text style={styles.chooseTitle}>Choose an option </Text>

        <View style={styles.options}>
        <TouchableOpacity onPress={() => playRound("Rock")}>
          <Image source={require('../assets/rock.png')} style={styles.image}/>
          <Text style={styles.rockT}>Rock</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => playRound("Paper")}>
        <Image source={require('../assets/paper.png')} style={styles.image}/>
          <Text style={styles.paperT}>Paper</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => playRound("Scissors")}>
        <Image source={require('../assets/scissors.png')} style={styles.image}/>
          <Text style={styles.scissorsT}>Scissors</Text>
        </TouchableOpacity>
        </View>

      <TextInput 
        placeholder='Player name'
        value={player}
        onChangeText={setPlayer}
        style={styles.textInput}
        />

      <TouchableOpacity 
          onPress={() => {handleSave()}}
          style={styles.saveBnt}
          >
        <Text style={styles.saveTxt}>Save Result</Text>
      </TouchableOpacity>

      </View>
    )
  }

  export default gameScreen

  const styles = StyleSheet.create({
      container: {
          flex:1,
          backgroundColor: '#FF6B67',
          padding: 20,
          alignItems: 'center',
      },

      gameTitle:{
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 50,
        marginVertical: 20,
        color: 'white',
      },

      scores:{
        flexDirection: 'row',
        padding: 5,
      },


      plyrScore:{
        padding: 10,
        fontSize: 15,
        color:'white',
      },
      cmptrScore:{
        padding: 10,
        fontSize: 15,
        color:'white',
      },

        chooseTitle:{
          textAlign: 'center',
          fontSize: 20,
          color: 'white'
        },

      options:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginVertical: 20,
      },

      image:{
        width: 100,
        height: 100,
        resizeMode: 'cover',


      },
      rockT:{
        textAlign: 'center',
        color: 'white',
        marginTop: 5,
      },

      paperT:{

        textAlign: 'center',
        color: 'white',
        marginTop: 5,
      },


      scissorsT:{

        textAlign: 'center',
        color: 'white',
        marginTop: 5,
      },

      textInput:{
        borderColor: 'black',
        backgroundColor: 'white',
        color: 'black',
        borderWidth: 2,
        fontSize: 18,
      },

      saveTxt:{
        fontSize: 18,
        color: '#FF6B67',
        fontWeight: 'bold',
        textAlign: 'center'
      },

      saveBnt: {
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 20,
        width: 150,
        alignItems:'center'
      },

  })