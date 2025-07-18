import { useNavigate } from "react-router-dom";

const UserCard = ({ id, username, email }: { id: number, username: string, email: string }) => {
    const navigate = useNavigate();

    return (
        <button
            onClick={() => {
                console.log(id, username, email);
                navigate(`/irgiId/${id}`);
            }}
            className=""
        >
            <div className={`w-64 ${id % 2 === 0 ? "border-red-500" : "border-blue-500"} border border-2 p-4 rounded-lg shadow-md bg-white flex flex-col items-start`}>
                <h2 className="text-xl font-bold mb-2">User ID: {id}</h2>
                <p><strong>Username:</strong> {username}</p>
                <p className="text-left"><strong>Email:</strong> {email}</p>
            </div>
        </button>
    );
};

export default UserCard;
