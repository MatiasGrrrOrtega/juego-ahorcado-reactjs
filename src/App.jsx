import { useState, useEffect } from "react"

import ButtonOptionList from "./components/ButtonOptionList"
import ImageHanged from "./components/ImageHanged"
import GetWordRandom from "./data/GetWordRandom"
import Answer from "./components/Answer"

import "./App.css"
function App() {

  const [attempts, setAttempts] = useState(8)
  const [word, setWord] = useState(GetWordRandom())
  const [hiddenWord, setHiddenWord] = useState(word.split("").map(() => "_ "))

  const [buttonActive, setButtonActive] = useState('activo')
  const [win, setWin] = useState(false)
  const [lose, setLose] = useState(false)
  console.log(word)
  
  useEffect(() => {
    if (attempts <= 0) {
      setLose(true)
      setAttempts(0)
    }
  },[attempts])

  useEffect(() => {
    if (hiddenWord.join("") === word) {
      setWin(true)
    }
  }, [hiddenWord])

  const cheackLetter = (letter) => {
    let letterCheack = letter.toLowerCase();
    if (word.includes(letterCheack)) {
      const newHiddenWord = [...hiddenWord]
      word.split("").forEach((l, index) => {
        if (l === letterCheack) {
          newHiddenWord[index] = letterCheack
        }
      })
      setHiddenWord(newHiddenWord)
    }else{
      setAttempts(attempts - 1)
    }
    setButtonActive(letter)
  }

  const resumeGame = () => {
    setAttempts(8)
    setWord(GetWordRandom())
    setHiddenWord(word.split("").map(() => "_ "))
    setWin(false)
    setLose(false)
  }

  return (
    <>
      <h1>AHORCADO</h1>
      <ImageHanged errorNumber={attempts}/>
      <Answer win={win} lose={lose} word={word}/>
      <h3>{hiddenWord}</h3>
      <h3>Attemps: {attempts}</h3>
      <ButtonOptionList cheackLetter={cheackLetter} buttonActive={buttonActive}/>
      <button onClick={resumeGame}>Resume Game</button>
    </>
  )
}

export default App
