import { useEffect, useState } from 'react'
import api from '../../libs/axios';
import UserCard from './componentIrgi/UserCard';

export default function IrgiFetch() {
    const [dataUser, setDataUser] = useState([]);
    const fetchUser = async () => {
        try {
            const response = await api.get('/users');
            console.log("User Data:", response.data); // Log the fetched user data
            setDataUser(response.data);
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    }

    useEffect(() => {
        fetchUser(); // Call fetchUser when the component mounts
    }, []);

  return (
    <>
    <div className='flex flex-wrap gap-4'>
        {dataUser.map((user: any) => (
            <UserCard 
                key={user.id} 
                id={user.id} 
                username={user.username} 
                email={user.email} 
            />
        ))}
    </div>
    </>
  )
}
