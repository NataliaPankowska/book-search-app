

import { background, Box, Flex, flexbox, Grid, GridItem } from "@chakra-ui/react"
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
    meal: string
}

const FoodQuery = ({onSearch, onDelete, ingredients, apiError, isLoading,  calories, fat, proteins, carbs, meal}: Props) => {
   
    
  return (
    <>
 <Flex direction='column' gap={5}>

    <MealInputForm apiError={apiError} onSearch={onSearch} meal={meal}/>
  <Flex direction='row' wrap="wrap">
  <Box w='40%'>
    <IngredientList ingredients={ingredients} onDelete={onDelete} isLoading={isLoading}/>
    
    </Box>
    <Box w='40%'>
    <NutrimentsTable calories={calories} fat={fat} proteins={proteins} carbs={carbs}/>
    </Box>
    </Flex>

    <SaveButton meal={meal} />
  
    </Flex>
    </>
  )
}

export default FoodQuery