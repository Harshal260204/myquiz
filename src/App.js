import React, { useState } from "react";
import "./App.css";
import MainMenu from "./Components/MainMenu";
import Quiz from "./Components/Quiz";
import EndScreen from "./Components/EndScreen";
import { QuizContext } from "./Helpers/Contexts";
function App() {
  const [gameState, setGameState] = useState("Menu");
  const [score, setScore] = useState(0);
  return (
    <div className="App">
      <h1>Welcome To BrainBash</h1>
      <QuizContext.Provider
        value={{ gameState, setGameState, score, setScore }}
      >
        {gameState === "Menu" && <MainMenu />}
        {gameState === "Quiz" && <Quiz />}
        {gameState === "EndScreen" && <EndScreen />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
