import { CloseIcon } from "@chakra-ui/icons"
import { Button, Skeleton, SkeletonText, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react"
import IngredientSkeleton from "./IngredientSkeleton"

interface Props {
    ingredients: string[],
    onDelete: (ingr: string) => void,
    isLoading: boolean
}

export const IngredientList = ({ingredients, onDelete, isLoading}: Props) => {
   
  return (
   <Table className="ingr-list" size='sm' >
  
    <Tbody>
    {
        ingredients.map(ingr => <Tr key={ingr} h='20px' >
        {}
           <Td > {ingr}</Td>
           <Td  bg="#ffb4a2" width='20px'> <Button size='xs' colorScheme='white' variant='ghost' onClick={() => onDelete(ingr)}><CloseIcon /></Button></Td>
            </Tr>)
      
    }    
   
   {isLoading && <IngredientSkeleton />   }
    </Tbody>
   </Table>
  )
}
