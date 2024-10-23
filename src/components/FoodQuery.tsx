

import { IngredientList } from "./IngredientList"
import MealInputForm from "./MealInputForm"


interface Props {
    onSearch: (searchText: string) => void,
    onDelete: (ingr: string) => void,
    ingredients: string[],
    apiError: string | null,
    isLoading: boolean
}

const FoodQuery = ({onSearch, onDelete, ingredients, apiError, isLoading}: Props) => {
   
    
  return (
    <>
    
    <MealInputForm apiError={apiError} onSearch={onSearch}/>
    <IngredientList ingredients={ingredients} onDelete={onDelete} isLoading={isLoading}/>
   
    </>
  )
}

export default FoodQuery