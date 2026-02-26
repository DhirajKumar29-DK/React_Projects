 import styled from "styled-components";
 
export const Button = styled.button`
    background-color: #111;
    color: white;
    padding: 10px 18px;
    border-radius: 5px;
    min-width: 220px;
    font-size: 16px;
    border: none;
    font-weight: 500;
    border: 1px solid transparent;
    transition: 0.4s ease-in;
    cursor: pointer;

    &:hover{
        background-color: #fff;
        border: 1px solid black;
        color: #111;
        transition: 0.3s ease-in;
    }
  `; 

  export const OutlineButton = styled(Button)`
  background-color: #fff;
  border: 1px solid black;
  color: black;
     &:hover{
        background-color: #111;
        border: 1px solid transparent;
        color: #fff;
        transition: 0.3s ease-in;
    }
  `; 