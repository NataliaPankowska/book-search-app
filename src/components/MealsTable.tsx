import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { Box, Button,   Table, Tbody, Td,  Tr } from '@chakra-ui/react'
import { useState } from 'react'


interface Meal {
    meal: string,
    ingredients: string[];
    calories: number;
    fat: number;
    carbs: number;
    proteins: number;
}


const MealsTable = ({meal, ingredients, calories, fat, carbs, proteins}: Meal) => {
    const [visible, setVisible] = useState(false);
    const handleShow = () => {
        visible ? setVisible(false) : setVisible(true);
    }
    let style;
    if(visible){
        style= {
            display: 'block'
        }
    }else{
        style={
            display: 'none'
        }
    }
  return (
    <Box>
        <h1>{meal}</h1>
       <Button onClick={handleShow}>{visible ? <ChevronUpIcon /> : <ChevronDownIcon />}</Button>
       <div style={style}>
        <Table >
            <Tbody>
                
                {ingredients.map((ingr) => 
                <Tr key={ingr}>
                    <Td>{ingr}</Td>
                </Tr>)}
               
            </Tbody>
        </Table>
        <h1>{calories} calories</h1>
        <h1>{fat}g of lipids</h1>
        <h1>{carbs}g of carbs</h1>
        <h1>{proteins}g of proteins</h1>
        </div>
    </Box>
  )
}

export default MealsTable