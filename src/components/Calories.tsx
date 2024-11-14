import { Heading } from '@chakra-ui/react'

interface Props{
    calories: number
}

const Calories = ({calories}: Props) => {
  return (
  <Heading>{calories} calories au total</Heading>
  )
}

export default Calories