import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { supabase } from '../utils/supabaseClient';

type User = {
  id: number;
  name: string;
};

const ProfilePage: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.user();
      
       if (error) {
         console.error('Error fetching user:', error.message);
       } else {
         setUser(data || null);
       }
     };
 
     fetchUser();
   }, []);

   return (
     <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
       {/* User info */}
       <section>
         {/* User info content here */}
       </section>
 
       {/* Settings */}
       <section>
         {/* Settings content here */}
       </section>
 
       {/* Preferences */}
       <section>
         {/* Preferences content here */}
       </section>
 
       {/* Activity history */}
       <section>
         {/* Activity history content here */}
       </section>
     </motion.div>
   );
 };
 
 export default ProfilePage;