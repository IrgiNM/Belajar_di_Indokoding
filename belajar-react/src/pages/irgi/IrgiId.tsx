import { useEffect, useState } from 'react'
import api from '../../libs/axios';
import { useParams } from 'react-router-dom';
import type { UserIrgi } from '../../typeIrgi';

export default function IrgiId() {
    const [dataUserId, setDataUserId] = useState<UserIrgi>();
    const { id } = useParams();
    const [idU, setIdU] = useState<number>(parseInt(id || '0')); // Get the ID from the URL parameters
    console.log("ID dari URL:", id); // Log the ID from the URL
    console.log("idU :", idU); // Log the state idU

    const fetchUser = async (idUser : number) => {
        try {
            const response = await api.get('/users/' + idUser);
            console.log("User Data:", response.data);
            setDataUserId(response.data);
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    }
    
    useEffect(() => {
        fetchUser(idU); 
    }, [idU]);

    console.log("Data User ID:", dataUserId); // Log the fetched user data
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className={`w-64 border-2 p-4 rounded-lg shadow-md bg-white flex flex-col items-start`}>
            <h2 className="text-xl font-bold mb-2">User ID: {dataUserId?.id}</h2>
            <p><strong>Username:</strong> {dataUserId?.username}</p>
            <p className="text-left"><strong>Email:</strong>{dataUserId?.email}</p>
        </div>
        <button  onClick={()=>{
            if(idU > 9){
                setIdU(1);
                console.log("Next button clicked")
            }else{
                setIdU(idU + 1); 
                console.log("Next button clicked")
            }
            }} 
            className='w-20 rounded-lg mt-5 bg-blue-500 text-white pt-1 pb-2'>
            next
        </button>
    </div>
  )
}
