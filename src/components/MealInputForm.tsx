import { AddIcon } from '@chakra-ui/icons';
import { Button,  FormLabel, HStack, Input, Select } from '@chakra-ui/react'

import {z} from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';




const schema = z.object({
  description: z.string().min(5, {message: 'Description should have at least 5 characters'}).max(40, {message: 'Description should have at least 40 characters'}),

})
type FoodForm = z.infer<typeof schema>;
interface Props{
    onSearch: (searchText: string) => void,
    apiError: string | null,
    meal: string
}

const MealInputForm = ({onSearch, apiError, meal}: Props) => {
    // const ref = useRef<HTMLInputElement>(null);
   const {register, handleSubmit, reset, formState: {errors}} = useForm<FoodForm>({resolver: zodResolver(schema)})

  return (
    <form   
        onSubmit={handleSubmit(({description}) => {
          onSearch(description);
          reset();
        }) }
    >
      <FormLabel>Add all ingredients (one by one) of your today's {meal}</FormLabel>

      <HStack width="80%">
      <Input type='text' {...register('description')}placeholder='ex. 30g cheese' id='description'/>
      {errors.description  && <p className='texte-danger'>{errors.description.message}</p>}
      {apiError && <h1>{apiError}</h1>} 
   
      <Button type='submit'><AddIcon/></Button>
      </HStack>
    </form>
  )
}

export default MealInputForm