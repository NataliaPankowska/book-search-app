import { Grid, GridItem, Heading } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import useData from "./hooks/useData";
import CaloriesChart from "./components/CaloriesChart";

import FoodQuery from "./components/FoodQuery";





function App() {
 
 
  const [ingredients, setIngredients] = useState<string[]>([]);
  const{ data, error }= useData(ingredients, (validIngredients) => {
    setIngredients(validIngredients); // Update the ingredients array with only valid ones
})
  const [calories, setCalories] = useState<number>(0)
  
  useEffect(() => {
    if (ingredients.length === 0) {
      setCalories(0);
      
    } else {
      if (data?.calories !== undefined) {
      setCalories(data.calories); // Update calories based on API data
    }
  }}, [data, ingredients]);



 console.log(ingredients)

  return (
    <>
    <Grid templateAreas={`"header" "main" "footer"`} padding='10px' >
         <GridItem area='header'>
         {/* <Heading>Tell me what I eat...</Heading> */}
         </GridItem>
         <GridItem area='main'>
         <FoodQuery apiError={error} ingredients={ingredients} onDelete={(ingr) => setIngredients(ingredients.filter((el) => el !== ingr)) } onSearch={(searchText) => setIngredients([...ingredients, searchText])}/>
        
     <CaloriesChart calories={calories} caloriesNeeded={2000} />

         </GridItem>
         <GridItem area='footer'>
     
         </GridItem>
    
  
   </Grid>
    </>
  )
}

export default App
