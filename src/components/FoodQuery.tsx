
import { HStack } from "@chakra-ui/react"
import { IngredientList } from "./IngredientList"
import MealInputForm from "./MealInputForm"
import { useState } from "react"

interface Props {
    onSearch: (searchText: string) => void,
    onDelete: (ingr: string) => void,
    ingredients: string[],
    apiError: string | null
}

const FoodQuery = ({onSearch, onDelete, ingredients, apiError}: Props) => {
   
    
  return (
    <>
    
    <MealInputForm apiError={apiError} onSearch={onSearch}/>
    <IngredientList ingredients={ingredients} onDelete={onDelete}/>
   
    </>
  )
}

export default FoodQuery