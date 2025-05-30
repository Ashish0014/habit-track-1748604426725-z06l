import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { supabase } from '../utils/supabaseClient';

type Habit = {
  id: number;
  name: string;
  goal: number;
};

const IndexPage: React.FC = () => {
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
      {/* Hero section */}
      <section>
        {/* Your hero section content here */}
      </section>

      {/* Features grid */}
      <section>
        {/* Features grid content here */}
      </section>

      {/* Testimonials */}
      <section>
        {/* Testimonials content here */}
      </section>

      {/* Call to action */}
      <section>
        {/* Call to action content here */}
      </section>
    </motion.div>
  );
};

export default IndexPage;