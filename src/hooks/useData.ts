import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";



interface Data {
    calories: number
  }


const useData = (ingredients: string[]) => {
   const [data, setData] = useState<Data>()
//    const [calories, setCalories] = useState();
    useEffect(() => {
        if (ingredients.length === 0) {
            
            return; // Exit early if there are no ingredients
        }
        apiClient.post('', { 'ingr':ingredients})
        .then(res => setData(res.data) )
        .catch(err=> console.log(err.response))
    }, [ingredients]);
return data;
}

export default useData;