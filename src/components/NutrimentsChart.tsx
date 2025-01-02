import { Legend, PolarAngleAxis, RadialBar, RadialBarChart, ResponsiveContainer } from "recharts";
import {Meal} from '../services/types'

interface Props{
    meal: Meal[],
    // proteins: number,
    // fat: number,
    // carbs: number,
    protsNeeded: number,
    carbsNeeded: number,
    fatNeeded: number
}
const NutrimentsChart = ({meal, protsNeeded, carbsNeeded, fatNeeded}: Props) => {
    const totProteins = meal.reduce((sum, meal) => sum + meal.proteins, 0);
    const totFat = meal.reduce((sum, meal) => sum + meal.fat, 0);
    const totCarbs = meal.reduce((sum, meal) => sum + meal.carbs, 0);

    const protsPercent = (totProteins/protsNeeded) * 100;
    const protsPercentInteger = protsPercent.toFixed();
    const carbsPercent = (totCarbs/carbsNeeded) * 100;
    const carbsPercentInteger = carbsPercent.toFixed();
    const fatPercent = (totFat/fatNeeded) * 100;
    const fatPercentInteger = fatPercent.toFixed();
    const mealsNutriments = [
        {name: `${protsPercentInteger}% of proteins`, amount: protsPercentInteger, label: 'blll', fill: '#bb3e03'},
        {name: `${carbsPercentInteger}% of carbohydrates`, amount: carbsPercentInteger, label: 'blll', fill: '#ffb5a7'},
        {name: `${fatPercentInteger}% of fat`, amount: fatPercentInteger, label: 'blll', fill: '#81b29a'}
       
    ];
    const style = {
        top: '50%',
        right: 0,
        transform: 'translate(50%, -50%)',
        lineHeight: '24px',
        
      };
  return (
    <ResponsiveContainer width={500} height={500} >
        <RadialBarChart 
          innerRadius={100}
          outerRadius={140}
        data={mealsNutriments}
        >
            <RadialBar dataKey='amount' >

            </RadialBar>
            <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} />

            <PolarAngleAxis  tick={false}
        domain={[0, 100]}
        type="number" />
        </RadialBarChart>
    </ResponsiveContainer>
  )
}

export default NutrimentsChart