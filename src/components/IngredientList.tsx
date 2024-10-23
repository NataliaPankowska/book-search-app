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
   <Table>
    <Thead>
        <Tr>
            <Th>Ingredients</Th>
        </Tr>
    </Thead>
    <Tbody>
  
    {
        ingredients.map(ingr => <Tr key={ingr}>
        {}
           <Td> {ingr}</Td>
           <Td> <Button onClick={() => onDelete(ingr)}><CloseIcon /></Button></Td>
            </Tr>)
      
    }    
   
   {isLoading && <IngredientSkeleton />   }
    </Tbody>
   </Table>
  )
}
