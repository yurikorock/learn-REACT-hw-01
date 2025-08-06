import './App.css';
import Profile from '../Profile/Profile.jsx';
import userData from '../../userData.json';
import friends from '../../friends.json';
import Friendlist from '../Friendlist/Friendlist.jsx';
import transactions from '../../transactions.json';
import TransactionHistory from '../TransactionHistory/TransactionHistory.jsx';
import { useState } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [tabIndex, setTabIndex] = useState(null);

  const toggleText = () => {
    setIsOpen(!isOpen);
  };
  const selectTab = (nextIndex) => {
    if(nextIndex === tabIndex){
      setTabIndex(null)
    }else {

      setTabIndex(nextIndex);
    }
  };

  return (
    // <>
    // <Profile
    //   name={userData.username}
    //   tag={userData.tag}
    //   location={userData.location}
    //   image={userData.avatar}
    //   stats={userData.stats}
    // />
    // <Friendlist friends={friends}/>
    // <TransactionHistory items={transactions} />
    // </>
    <div>
      <button onClick={toggleText}>SuperMegaButton</button>
      {isOpen && <p>👀Now you see mee !👀</p>}
      <hr></hr>
      <div>
        <p onClick={()=> selectTab(1)}>Tab 1</p>
        {tabIndex === 1 && (
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod tempor
          </p>
        )}
      </div>
      <div>
        <p onClick={()=> selectTab(2)}>Tab 2</p>
        {tabIndex === 2 && (<p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
          tempor
        </p>)}
        
      </div>
      <div>
        <p onClick={()=> selectTab(3)}>Tab 3</p>
        {tabIndex === 3 && (<p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
          tempor
        </p>)}
        
      </div>
    </div>
  );
}

export default App;
