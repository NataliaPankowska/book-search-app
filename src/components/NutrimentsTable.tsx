import { background, Table, TableContainer, Tbody, Td, Tr } from '@chakra-ui/react'
interface Props{
  calories: number,
  proteins: number,
  fat: number,
  carbs: number
}

const NutrimentsTable = ({calories, proteins, fat, carbs}: Props) => {
  const caloriesInteger = calories.toFixed();
  const proteinsInteger = proteins.toFixed();
  const fatInteger = fat.toFixed();
  const carbsInteger = carbs.toFixed();
  return (
    <TableContainer style={{borderWidth: '1px', borderRadius: '10px', width: '40vw'}}>
    <Table variant='simple'>
        <Tbody>
            <Tr><Td>Calories</Td><Td isNumeric>{caloriesInteger}</Td></Tr>
            <Tr><Td>Proteins</Td><Td isNumeric>{proteinsInteger}g</Td></Tr>
            <Tr><Td>Lipids</Td><Td isNumeric>{fatInteger}g</Td></Tr>
            <Tr><Td>Carbs</Td><Td isNumeric>{carbsInteger}g</Td></Tr>  
        </Tbody>
    </Table>
    </TableContainer>
  )
}

export default NutrimentsTable