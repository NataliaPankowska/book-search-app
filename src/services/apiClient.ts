import axios from "axios";

 export default axios.create({
    baseURL: 'https://api.edamam.com/api/nutrition-details',
    params: {
        app_id: '575b0d08',
        app_key: 'c60a46ac4cedcd28228533b3ad1bef8d'
    }
 })