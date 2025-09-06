import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UserInfo from '../components/UserInfo/UserInfo.jsx';

export default function UserDetailsPage() {
  const { userId } = useParams();

  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/users/${userId}`)
      .then((res) => setUser(res.data));
  }, [userId]);
  return <div>{user && <UserInfo user={user} />}</div>;
}
// на любу сторінку яка рендериться з динамічними параметрами
// можна викликати useParams і отримати обєкт параметрів
// useParams можливість отримати із URL параметри і їх значення path='/dashboard/:userId'
