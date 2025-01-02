import { CloseIcon } from "@chakra-ui/icons"
import { Button,  Table, TableContainer, Tbody, Td, Tr } from "@chakra-ui/react"
import IngredientSkeleton from "./IngredientSkeleton"

interface Props {
    ingredients: string[],
    onDelete: (ingr: string) => void,
    isLoading: boolean
}

export const IngredientList = ({ingredients, onDelete, isLoading}: Props) => {
   
  return (
    <TableContainer style={{ borderRadius: '10px', width: '40vw'}}>
   <Table  variant='unstyled' className="ingr-list" size='sm' >
  
    <Tbody>
    {
        ingredients.map(ingr => <Tr key={ingr} h='20px' >
        {}
           <Td > {ingr}</Td>
           <Td width='20px'> <Button size='xs' colorScheme='white' variant='ghost' onClick={() => onDelete(ingr)}><CloseIcon /></Button></Td>
            </Tr>)
      
    }    
   
   {isLoading && <IngredientSkeleton />   }
    </Tbody>
   </Table>
   </TableContainer>
  )
}
