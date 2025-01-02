import { FormLabel, Select } from '@chakra-ui/react'
import meals from './meals';
import {Meal} from '../services/types';
import React, { ChangeEvent, useState } from "react";


interface Props{
    onSelect: (meal: string) => void,
    value: string,
    savedMeals: Meal[]
}

const MealSelect = ({onSelect, value, savedMeals}: Props) => {

const [error, setError] = useState<string | null>(null);
const handlSelect = (e: ChangeEvent<HTMLSelectElement>): string => {
  const value = (e.target as HTMLInputElement | HTMLSelectElement).value;
  if(savedMeals.some(meal => meal.meal === e.target.value)){
    setError(`My dear, you have aldready eaten your ${e.target.value}`)
    return ''
  }else{
    setError(null)
    return value
  }
}
  return (
  <form >
    <FormLabel>Choose the meal</FormLabel>
    <Select value={value} onChange={(e) => onSelect(handlSelect(e))} width='40vw'>
        {/* <option value=""></option> */}
        {meals.map(meal => <option key={meal} value={meal}>{meal}</option>)}
    </Select>
    {error && <p className='textdanger'>{error}</p>}
  </form>
  )
}

export default MealSelect