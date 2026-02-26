import styled from "styled-components"

const RollDice = ({curentDice, roleDice}) =>{

  return (
    <DiceContainer>
       <div className="dice" 
       onClick={() => roleDice() }>
         <img src={`dice/dice_${curentDice}.png`} alt="dice_1" />
       </div>
       <p>Click on Dice to roll</p> 
    </DiceContainer>
  )
}

export default RollDice

const DiceContainer = styled.div`
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;

    p{
      font-size: 24px;
    }

    .dice{
        cursor: pointer;
    }
`;