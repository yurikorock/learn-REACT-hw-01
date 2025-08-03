import './App.css';
import { Profile } from './Profile.jsx';
import  userData  from './userData.json';

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
      
    </>
    
  );
}

export default App;
