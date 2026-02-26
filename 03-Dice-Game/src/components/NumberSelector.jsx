import styled from "styled-components"

const NumberSelector = ({error, SetError ,selectNumber, setSelectNumber}) => {

    const arrNumber = [1,2,3,4,5,6];

    const numberSelectorHandler = (value) =>{
      setSelectNumber(value);
      SetError("")
    }

  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {
      arrNumber.map((value, id) => (
        <Box 
          $isSelectedNumber = {value === selectNumber}  //props for styling
          key={id}
          onClick={() => {
            numberSelectorHandler(value)
          }}
        >
            {value}</Box>
      ))
      }  
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  )
}

export default NumberSelector

const NumberSelectorContainer = styled.div`
   
   display: flex;
   flex-direction: column;
   align-items: end;

  
    .flex{
       display: flex;
       gap: 24px;
    }
    p{
        font-size: 24px;
        font-weight: 700; 
    }
    .error{
      color: red;
    }
`

const Box = styled.div`
    height: 72px;
    width: 72px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    background-color: ${(props) => props.$isSelectedNumber ? "black" : "white"};
    color: ${(props) =>
    !props.$isSelectedNumber ? "black" : "white"};
    cursor: pointer;
`