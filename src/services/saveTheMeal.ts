import { useEffect, useState } from "react";

interface Meal {
    meal: string,
    ingredients: string[];
    calories: number;
    fat: number;
    carbs: number;
    proteins: number;
}

const saveTheMeal = (calories: number, proteins: number, carbs: number, fat: number, ingredients: string[], meal: string): Meal => {
    
   return {
    meal,
    calories,
    ingredients,
    fat,
    carbs,
    proteins
   };
  
   
};

export default saveTheMeal;