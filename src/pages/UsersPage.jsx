// import axios from 'axios';
import { useEffect, useState } from 'react';
import UserList from '../components/UserList/UserList.jsx';
import { fetchUsers } from '../services/userService.js';

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    // axios
    //   .get('https://dummyjson.com/users')
    //   .then((res) => setUsers(res.data.users));
    fetchUsers()
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      {users.length > 0 && <UserList users ={users}/>}
      {/* {users.length > 0 && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.firstName} {user.lastName}
            </li>
          ))}
        </ul>
      )} */}
    </div>
  );
}
