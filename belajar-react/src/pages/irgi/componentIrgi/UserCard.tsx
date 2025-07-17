const UserCard = ({ id, username, email } : {id: number, username: string, email: string}) => {
    return (
      <div className="w-[200px] border p-4 rounded-lg shadow-md bg-white">
        <h2 className="text-xl font-bold mb-2">User ID: {id}</h2>
        <p><strong>Username:</strong> {username}</p>
        <p><strong>Email:</strong> {email}</p>
      </div>
    );
  };
  
  export default UserCard;
  