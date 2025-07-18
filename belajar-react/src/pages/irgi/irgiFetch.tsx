import { useEffect, useState } from 'react'
import api from '../../libs/axios';
import UserCard from './componentIrgi/UserCard';

interface User {
    id: number;
    username: string;
    email: string;
}

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

    // useEffect(() => {
    //     dataUser.id 
    //     if(dataUser.id === )
    // }, []);

    useEffect(() => {
        fetchUser(); // Call fetchUser when the component mounts
    }, []);

  return (
    <>
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 border p-5 justify-center'>
        {dataUser.map((user: User) => (
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
