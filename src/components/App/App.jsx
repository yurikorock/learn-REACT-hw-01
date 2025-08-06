import './App.css';
import Description from '../Description/Description.jsx';
import Option from '../Option/Option.jsx';
import Feedback from '../Feedback/Feedback.jsx';
import Notification from '../Notification/Notification.jsx';
import { useEffect, useState } from 'react';

function App() {
  
    const [feedback, setFeedback] = useState(() => {
    const saveFeedback = localStorage.getItem('feedback');
    return saveFeedback !== null
      ? JSON.parse(saveFeedback)
      : {
          good: 0,
          neutral: 0,
          bad: 0,
        };
  });
  
  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  const updateFeedback = (feedbackType) => {
    // console.log(feedbackType);
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
      //good: feedback.good + 1
    });
  };
  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <>
      <Description />
      <Option
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
