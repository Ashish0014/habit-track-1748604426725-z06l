import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { supabase } from '../utils/supabaseClient';

type Habit = {
  id: number;
  name: string;
  goal: number;
};

const DashboardPage: React.FC = () => {
  const [habits, setHabits] = useState<Habit[]>([]);

  useEffect(() => {
    const fetchHabits = async () => {
      const { data, error } = await supabase.from('habits').select('*');
      if (error) {
        console.error('Error fetching habits:', error.message);
      } else {
        setHabits(data || []);
      }
    };

    fetchHabits();
  }, []);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {/* Stats overview */}
      <section>
        {/* Stats overview content here */}
      </section>

      {/* Habit grid */}
      <section>
        {/* Habit grid content here */}
      </section>

      {/* Recent activity */}
      <section>
        {/* Recent activity content here */}
      </section>

      {/* Quick actions */}
      <section>
        {/* Quick actions content here */}
      </section>
    </motion.div>
  );
};

export default DashboardPage;