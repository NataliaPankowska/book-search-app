import { useEffect } from "react";
import apiClient from "../services/apiClient";

interface Recipe {
    title: string,
    ingr: string[]
}

const useData = () => {
    useEffect(() => {
        apiClient.post<Recipe>('', {title: 'onion soup', ingr: ['1 onion', '300g cheese']})
        .then(res => console.log(res.data))
        .catch(err=> console.log(err))
    }, [])
}

export default useData;