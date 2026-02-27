import { useEffect, useState } from "react";
import styled from "styled-components"
import SearchResults from "./components/SearchResult/SearchResults";

export const BASE_URL = "http://localhost:9000"


const App = () => {

const [data, setData] = useState(null);
const [filteredData, setFilteredData] = useState(null)
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);
const [seletedBtn, setSelectBtn] = useState("all");

useEffect(() => {
  const fetchFoodData = async() => {
  setLoading(true);

  try{
    const response = await fetch(BASE_URL);

    const json = await response.json();

   setData(json);
   setLoading(false);
   setFilteredData(json);
   } catch (error) {
     setError("Unable to fetch data")
   }
 }
   fetchFoodData();
},[])

const searchFood = (e) => {
  const searchValue = e.target.value;

  if(searchValue == ""){
    setFilteredData(null)
  }

  const filter = data?.filter((food) =>
  food.name.toLowerCase().includes(searchValue.toLowerCase())
);
setFilteredData(filter);
  
}

const filterFood = (type) =>{
  if(type == "all"){
    setFilteredData(data);
    setSelectBtn("all");
    return;
  }

  const filter = data?.filter((food) =>
  food.type.toLowerCase().includes(type.toLowerCase())
);

setFilteredData(filter)
setSelectBtn(type)
};

const filterBtns = [
  {
    name: "All",
    type: "all"
  },
   {
    name: "Breakfast",
    type: "breakfast"
  },
   {
    name: "Lunch",
    type: "lunch"
  },
   {
    name: "Dinner",
    type: "dinner"
  }
];

if (error) return <div>{error}</div>;
if (loading) return <div>loading....</div>

  return(
   <>
   <Container>
    <TopSection>
      <div className="logo">
        <img src="logo.svg" alt="foody_logo" />
      </div>
      <div className="search" >
        <input onChange={searchFood} placeholder="Search Food...."/>
      </div>
    </TopSection>

    <FilterContainer>
      {filterBtns.map((value) => (
          <Button 
          isSelected={seletedBtn == value.type }
          key={value.name}
          onClick={() => {
          filterFood(value.type)
      }}
      >{value.name}</Button>
        ))
      }
    </FilterContainer>

   </Container>

   <SearchResults data={filteredData}/>
   </>
   
  )
};

export default App;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const TopSection = styled.section`
    height: 140px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;

    .search{
      input{
       background: transparent;
      border: 1px solid red;
      color: white;
      border-radius: 5px;
      height: 40px;
      font-size: 16px;
      padding: 0 10px;
      &::placeholder{
        color: #fff;
      }
    }
   }

   @media (0 < width < 600px){
    flex-direction: column;
    height: 120px;
   }
`; 

const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding-bottom: 40px;
`;

export const Button = styled.button`

  background:${({isSelected}) => (isSelected) ? "#f22f2f": "#ff4343" };
  outline:1px solid ${({isSelected}) => (isSelected) ? "#fff": "#ff4343" };;
  padding: 6px 12px;
  border-radius: 5px;
  border: none;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #fc0101;
  }
`;

