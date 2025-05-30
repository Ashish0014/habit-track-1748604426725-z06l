import React from 'react';
import { Habit } from '../../types/Habit';
import { motion } from 'framer-motion';

interface HabitCardProps {
  habit: Habit;
}

const HabitCard: React.FC<HabitCardProps> = ({ habit }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-lg p-4 rounded-md"
    >
      {/* Progress visualization */}
      <div>{habit.progress}</div>
      
      {/* Interactive buttons */}
      <button>Edit</button>
      
      {/* Streak counter */}
      <div>Streak: {habit.streak}</div>
      
      {/* Status indicators */}
      <div>Status: {habit.status}</div>
    </motion.div>
  );
};

export default HabitCard;