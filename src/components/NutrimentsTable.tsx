import { Table, Tbody, Td, Tr } from '@chakra-ui/react'
interface Props{
    calories: number,
    proteins: number,
    fat: number,
    carbs: number
}

const NutrimentsTable = ({calories, proteins, fat, carbs}: Props) => {
  return (
    <Table>
        <Tbody>
            <Tr><Td>Calories</Td><Td isNumeric>{calories}</Td></Tr>
            <Tr><Td>Proteins</Td><Td isNumeric>{proteins}</Td></Tr>
            <Tr><Td>Lipids</Td><Td isNumeric>{fat}</Td></Tr>
            <Tr><Td>Carbs</Td><Td isNumeric>{carbs}</Td></Tr>
            
        </Tbody>
    </Table>
  )
}

export default NutrimentsTable