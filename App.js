import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";

import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  /* V R giving the number and computer needs to guess it */

  // for showing only one eligible screen between StartGameScreen and GameScreen. This will be triggered only when the user will click on the start game button
  // When V have anything in the "userNumber" var -> it means that the game is running
  const [userNumber, setUserNumber] = useState();

  // for number of rounds V took to complete the game
  const [guessRounds, setGuessRounds] = useState(0); // initially V start with the 0 rounds. If it is > 0 => it means that game is over

  // for starting a new game
  const configureNewGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
  };

  // when the user have clicked on the start game button
  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  };

  const gameOverHandler = (numOfRounds) => {
    setGuessRounds(numOfRounds);
  };

  // By default "StartGameScreen" will be shown but if V have anything in "userNumber" then V will show "GameScreen" as it means that the game is running
  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (userNumber && guessRounds <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (guessRounds > 0) {
    content = (
      <GameOverScreen
        roundsNumber={guessRounds}
        userRounds={userNumber}
        userNumber={userNumber}
        onRestart={configureNewGameHandler}
      />
    );
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />

      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
