

import { ResponsiveContainer, RadialBarChart, RadialBar, PolarAngleAxis, Legend, LabelList } from "recharts"
import { Meal } from "../services/types"
interface Props {
    meal: Meal[],
    caloriesNeeded: number,
    // meal: string
}

const CaloriesChart = ({meal, caloriesNeeded}: Props) => {
  
    const totCalories = meal.reduce((sum, meal)=> sum + meal.calories, 0 )

    
    // const caloriesNeed = 2000;
    const percentage =meal && (totCalories/caloriesNeeded) * 100;
    const percentInteger = percentage && percentage.toFixed();
   
    const label = `${percentInteger}%`;
   
    const data = [
      meal.length > 0 &&  {name: `${totCalories} Calories`, amount: percentInteger, label: label, fill: '#fca311'},    
    ];
 
   
    const style = {
        top: '50%',
        right: 0,
        transform: 'translate(0, -50%)',
        lineHeight: '24px',
        
      };
  return (
    <>
    <ResponsiveContainer width={500} height={500} >
      <RadialBarChart 
       
        innerRadius={100}
        outerRadius={140}
      data={data}>
        <RadialBar dataKey='amount' fill='#fca311' >
            <LabelList dataKey='label' position="center"  fontWeight='900' />
        </RadialBar>
            <PolarAngleAxis  tick={false}
        domain={[0, 100]}
        type="number" />
         
    <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
      </RadialBarChart>
     
    </ResponsiveContainer>
    </>
  )
}

export default CaloriesChart