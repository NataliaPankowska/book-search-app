

import {  Box, Flex } from "@chakra-ui/react"
import { IngredientList } from "./IngredientList"
import MealInputForm from "./MealInputForm"
import NutrimentsTable from "./NutrimentsTable"
import SaveButton from "./SaveButton"


interface Props {
    onSearch: (searchText: string) => void,
   
    onDelete: (ingr: string) => void,
    ingredients: string[],
    apiError: string | null,
    isLoading: boolean, 
    calories: number,
    fat: number,
    proteins: number,
    carbs: number,
    meal: string,
    handleSaveMeal:  () => void;
}

const FoodQuery = ({onSearch, onDelete, ingredients, apiError, isLoading,  calories, fat, proteins, carbs, meal, handleSaveMeal}: Props) => {
   
    
  return (
    <>

 <Flex direction='column' gap={10} >
   
    <MealInputForm apiError={apiError} onSearch={onSearch} meal={meal}/>
 
   {ingredients.length > 0 && <Flex direction='column' justify="flex-start" gap={10}>
  <Flex direction='row' wrap="wrap" gap={10}>
  

    <IngredientList ingredients={ingredients} onDelete={onDelete} isLoading={isLoading}/>
    


    <Box alignItems='top'>
    <NutrimentsTable calories={calories} fat={fat} proteins={proteins} carbs={carbs}/>
    </Box>
    
    </Flex>
    <Box alignSelf='flex-start'>
    <SaveButton meal={meal} handleSaveMeal={handleSaveMeal} />
    </Box>
    </Flex>}
  
    </Flex>
    </>
  )
}

export default FoodQuery