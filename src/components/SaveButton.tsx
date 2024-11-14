import { Button } from '@chakra-ui/react'

interface Props{
    meal: string
}

const SaveButton = ({meal}: Props) => {
  return (
    <Button>Save your {meal}</Button>
  )
}

export default SaveButton