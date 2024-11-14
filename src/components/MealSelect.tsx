import { FormLabel, Select } from '@chakra-ui/react'

import { Form} from 'react-hook-form'
import meals from './meals'
import { FormEvent } from 'react'

interface Props{
    onSelect: (meal: string) => void
}

const MealSelect = ({onSelect}: Props) => {
//    const handleChange = (e: FormEvent) => {
//     e.preventDefault();
//     console.log(e.target.value)
//    }
  return (
  <form >
    <FormLabel>Choose the meal</FormLabel>
    <Select onChange={(e) => onSelect(e.target.value)}>
        <option value=""></option>
        {meals.map(meal => <option key={meal} value={meal}>{meal}</option>)}
    </Select>
  </form>
  )
}

export default MealSelect