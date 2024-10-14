

import { ResponsiveContainer, RadialBarChart, RadialBar, PolarAngleAxis, Legend, LabelList } from "recharts"

interface Props {
    calories: number,
    caloriesNeeded: number,
    // meal: string
}

const CaloriesChart = ({calories, caloriesNeeded}: Props) => {
    // const calories = 450;
    // const caloriesNeed = 2000;
    const percentage = (calories/caloriesNeeded) * 100;
    const label = `${percentage}%`;
    console.log(percentage);
    const meal = [
        {name: 'Calories', amount: percentage, label: label, fill: '#fca311'},
       
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
      data={meal}>
        <RadialBar dataKey='amount' background={true} fill='#fca311' >
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