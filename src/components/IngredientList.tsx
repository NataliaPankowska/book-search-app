import { CloseIcon } from "@chakra-ui/icons"
import { Button, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react"

interface Props {
    ingredients: string[],
    onDelete: (ingr: string) => void
}

export const IngredientList = ({ingredients, onDelete}: Props) => {
   
  return (
   <Table>
    <Thead>
        <Tr>
            <Th>Ingredients</Th>
        </Tr>
    </Thead>
    <Tbody>
    {
        ingredients.map(ingr => <Tr key={ingr}>

           <Td> {ingr}</Td>
           <Td> <Button onClick={() => onDelete(ingr)}><CloseIcon /></Button></Td>
            </Tr>)
    }
            
            
        
    </Tbody>
   </Table>
  )
}
