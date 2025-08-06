import './App.css';
import Option from '../Option/Option.jsx';

import friends from '../../friends.json';
import Description from '../Description/Description.jsx';

import Feedback from '../Feedback/Feedback.jsx';
import { useState } from 'react';

function App() {
  

  return (
    <>
    <Description/>
    <Option/>
    <Feedback/>
    </>
    
  );
}

export default App;
