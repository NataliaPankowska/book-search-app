import { Button,  FormLabel, Input } from '@chakra-ui/react'
import { useRef } from 'react'

interface Props{
    onSearch: (searchText: string) => void
}

const MealInputForm = ({onSearch}: Props) => {
    const ref = useRef<HTMLInputElement>(null);

  return (
    <form onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
        if (ref.current) ref.current.value = '';
     
    }}>
      <FormLabel>Ingredients</FormLabel>
      <Input type='text' ref={ref} />
      <Button type='submit'>Add Ingredient</Button>
    </form>
  )
}

export default MealInputForm