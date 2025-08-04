import './App.css';
import  Profile  from '../Profile/Profile.jsx';
import  userData  from '../../userData.json';
import friends from "../../friends.json";
import Friendlist from "../Friendlist/Friendlist.jsx";

function App() {
  
  return (
    <>
    <Profile
      name={userData.username}
      tag={userData.tag}
      location={userData.location}
      image={userData.avatar}
      stats={userData.stats}
    />
    <Friendlist friends={friends}/>  
    </>
    
  );
}

export default App;
