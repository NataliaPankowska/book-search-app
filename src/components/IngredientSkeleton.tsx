import { Box, Button, HStack, Skeleton, SkeletonCircle, SkeletonText, Td, Th, Tr } from '@chakra-ui/react'


const IngredientSkeleton = () => {
  return (
    <Tr>
   <Td>
    <SkeletonText  noOfLines={1}  skeletonHeight='5'/>  
   </Td>
   <Td><Button></Button></Td>
   </Tr>
  )
}

export default IngredientSkeleton