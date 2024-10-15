import { Heading } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import useData from "./hooks/useData";
import CaloriesChart from "./components/caloriesChart";

import FoodQuery from "./components/FoodQuery";





function App() {
 
 
  const [ingredients, setIngredients] = useState<string[]>([]);
  const data = useData(ingredients)
  const [calories, setCalories] = useState<number>(0)
  
  useEffect(() => {
    if (ingredients.length === 0) {
      setCalories(0);
      
    } else {
      if (data?.calories !== undefined) {
      setCalories(data.calories); // Update calories based on API data
    }
  }}, [data, ingredients]);



 console.log(data)

  return (
    <>
     <Heading>books</Heading>
   <FoodQuery ingredients={ingredients} onDelete={(ingr) => setIngredients(ingredients.filter((el) => el !== ingr)) } onSearch={(searchText) => setIngredients([...ingredients, searchText])}/>
   <CaloriesChart calories={calories} caloriesNeeded={2000}/>

    </>
  )
}

export default App
