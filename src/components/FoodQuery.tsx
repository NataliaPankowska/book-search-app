
import { IngredientList } from "./IngredientList"
import MealInputForm from "./MealInputForm"
import { useState } from "react"

interface Props {
    onSearch: (searchText: string) => void,
    onDelete: (ingr: string) => void,
    ingredients: string[]
}

const FoodQuery = ({onSearch, onDelete, ingredients}: Props) => {
   
    
  return (
    <>
    <MealInputForm onSearch={onSearch}/>
    <IngredientList ingredients={ingredients} onDelete={onDelete}/>
    </>
  )
}

export default FoodQuery