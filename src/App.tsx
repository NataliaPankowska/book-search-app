import { Box, Grid, GridItem } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import useData from "./hooks/useData";
import CaloriesChart from "./components/CaloriesChart";

import FoodQuery from "./components/FoodQuery";


import MealSelect from "./components/MealSelect";
import "./App.css"






function App() {
 
 
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [meal, setMeal] = useState<string>('')
  const{ data, error, isLoading, validIngredients }= useData(ingredients, (validIngredients) => {
    setIngredients(validIngredients); // Update the ingredients array with only valid ones
})
  const [calories, setCalories] = useState<number>(0);
  const [proteins, setProteins] = useState<number>(0);
  const [fat, setFat] = useState<number>(0);
  const [carbs, setCarbs] = useState<number>(0);

  
  useEffect(() => {
    if (ingredients.length === 0) {
      setCalories(0);
      setProteins(0);
      setCarbs(0);
      setFat(0);
      
    } else {
      if (data?.calories !== undefined) {
      setCalories(data.calories); 
      setProteins(data.totalNutrients.PROCNT.quantity);
      setCarbs(data.totalNutrients.CHOCDF.quantity);
      setFat(data.totalNutrients.FAT.quantity)
    }
  }}, [data, ingredients]);

console.log(proteins);



  return (
    <>
    <Box className='body' padding='40px' display='flex' flexDirection='column' height='100vh' gap="7">
       
        
        <MealSelect onSelect={(meal) => setMeal(meal)}/>
     
          
        {meal.length > 0 && 
       
         <FoodQuery
         meal={meal} 
         calories={calories} 
         fat={fat} 
         proteins={proteins} 
         carbs={carbs} 
         isLoading={isLoading} 
         apiError={error} 
         ingredients={validIngredients} 
         onDelete={(ingr) => setIngredients(ingredients.filter((el) => el !== ingr)) } 
         onSearch={(searchText) => setIngredients([...ingredients, searchText])} />
       
      }
        
     {/* <CaloriesChart calories={calories} caloriesNeeded={2000} /> */}
 </Box>
    </>
  )
}

export default App
