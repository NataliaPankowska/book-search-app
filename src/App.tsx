import { Box, HStack } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import useData from "./hooks/useData";
import CaloriesChart from "./components/CaloriesChart";
import FoodQuery from "./components/FoodQuery";
import MealSelect from "./components/MealSelect";
import "./App.css"
import NutrimentsChart from "./components/NutrimentsChart";
import saveTheMeal from "./services/saveTheMeal";
import MealsTable from "./components/MealsTable";
import { Meal } from "./services/types";




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
  const [savedMeals, setSavedMeals] = useState<Meal[]>([])
 
  
  
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
  const handleSaveMeal = () => {
    const savedMeal = saveTheMeal(calories, proteins, carbs, fat, ingredients, meal);
   
    setSavedMeals((prevMeals) => {
      if(!savedMeal){
        return prevMeals
      };
      return [...prevMeals, savedMeal];
  });
    setIngredients([]);
    setMeal('');
  }




  return (
    <>
    <Box className='body' display='flex' flexDirection='column' height='100vh' gap="7" >
       
       <Box width='100vw' > 
        <MealSelect value={meal} onSelect={(meal) => setMeal(meal)} savedMeals={savedMeals}/>
        </Box> 
        <Box width='100vw'> 
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
         onSearch={(searchText) => setIngredients([...ingredients, searchText])} 
         handleSaveMeal={handleSaveMeal}
         />
         
      }
      </Box>
    {savedMeals.length > 0 ? savedMeals.map((savedMeal =>  <MealsTable {...savedMeal}/> )): null}
     
        <HStack>
    { savedMeals.length > 0 ? <CaloriesChart meal={savedMeals} caloriesNeeded={2000} /> : null}
    { savedMeals.length > 0 ? <NutrimentsChart meal={savedMeals} protsNeeded={55} carbsNeeded={300} fatNeeded={80}/> : null}
   </HStack>
 </Box>
    </>
  )
}

export default App
