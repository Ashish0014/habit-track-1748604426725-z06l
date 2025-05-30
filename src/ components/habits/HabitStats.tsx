import React from 'react';
import { Habit } from '../../types/Habit';
import { LineChart, BarChart } from 'recharts';

interface HabitStatsProps {
  habits: Habit[];
}

const HabitStats: React.FC<HabitStatsProps> = ({ habits }) => {
  
  return (
    <div>
      {/* Charts/graphs */}
      
      {/* Success rate */}
      
      {/* Streak analytics */}
      
      {/* Time tracking */}
    </div>
  );
};

export default HabitStats;