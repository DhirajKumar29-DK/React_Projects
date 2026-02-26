import styled from "styled-components"
import TotalScore from "./TotalScore"
import NumberSelector from "./NumberSelector"
import RollDice from "./RollDice"
import { useState } from "react"
import { Button, OutlineButton } from "../styled/Button"
import Rules from "./Rules"

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectNumber, setSelectNumber] = useState();
  const [curentDice, setCurrentDice]  = useState(1);
  const [error, SetError] = useState("");
  const [showRules, SetShowRules] = useState(false);
  
  const genreateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
};

  const roleDice = ( )=> {

    if(!selectNumber){
      SetError("You have not selected any number")
      return;
    };

   const randomNumber = genreateRandomNumber(1, 7);
   setCurrentDice(() => randomNumber);
   
   if(selectNumber == randomNumber){
    setScore((prev)=> prev + randomNumber);
   } else {
    setScore((prev) => prev - 2)
   }

   setSelectNumber(undefined)
}

  const resetScore = () => {
    setScore(0)
  }
  return (
    <MainContainer>   
       <div className="top-section">
         <TotalScore score={score}/>
        <NumberSelector SetError={SetError}  error={error} selectNumber={selectNumber} setSelectNumber={setSelectNumber}/>
       </div>
       <RollDice curentDice={curentDice}  roleDice={roleDice}/>
       <div className="btns">
        <OutlineButton onClick={resetScore}>Reset</OutlineButton>
        <Button
        onClick={() => {
          SetShowRules(prev => !prev)
        }}
        >{showRules ? "Hide" : "Show"} Rules</Button>
       </div>
       {showRules && <Rules />}
    </MainContainer>
  )
}

export default GamePlay


const MainContainer = styled.main`
    
    padding-top: 70px;
   .top-section{
    display: flex;
    justify-content: space-around;
    align-items: end;
   }

   .btns{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    margin-top: 40px;
   }
`