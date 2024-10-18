import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";



interface Data {
    calories: number
  }


const useData = (ingredients: string[], onUpdateIngredients: (validIngredients: string[])=> void) => {
   const [data, setData] = useState<Data>()
   const [error, setError] = useState<string | null>(null);
   
//    const [calories, setCalories] = useState();
    useEffect(() => {
        if (ingredients.length === 0) {
            
            
            return; // Exit early if there are no ingredients
        }
        setError(null);
       
        apiClient.post('', { 'ingr':ingredients})
        .then(res => {

            setData(res.data);
        
            
        })
        .catch(err=> { 
            
            if(err.response.status == 555){
                const invalidIng = ingredients.pop();
                const validIngredients = ingredients.filter((i) => i !== invalidIng);
                onUpdateIngredients(validIngredients)
                setError('oh no');
                console.log(err.response);

            }else{
                setError('damn');
            }
            }
           
           
                // const invalidIngredients = ingredients.filter((ingr) =>
                //     err.response.data.some((errorItem: any) => errorItem.text.includes(ingr))
                // );

                // // Update the ingredients in the App component by removing invalid ones
                // const validIngr = ingredients.filter(ingr => !invalidIngredients.includes(ingr));
                // onUpdateIngredients(validIngr);
               
                // Show error message for invalid ingredients
                // setError(`These ingredients were not found: ${invalidIngredients.join(', ')}`);
                // setError('These ingredients were not found:');
            
        )
    }, [ingredients]);
return {data, error};
}

export default useData;