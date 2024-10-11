import axios from "axios";

 export default axios.create({
    baseURL: 'https://api.edamam.com/api/nutrition-details',
    params: {
        app_id: '1d0ca2ec',
        app_key: 'b29395161ddbdee99199b78c2a535985'
    }
 })