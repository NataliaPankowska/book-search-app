import { Button } from '@chakra-ui/react'

interface Props{
    meal: string,
    handleSaveMeal: () => void;
}

const SaveButton = ({meal, handleSaveMeal}: Props) => {
  return (
    <Button onClick={handleSaveMeal} >Save your {meal}</Button>
  )
}

export default SaveButton