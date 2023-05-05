import React from 'react';
import s from './FeedbackOptions.module.css'

const FeedbackOptions = ({options, onLeaveFeedback}) => {
  return (
    <div className={s.buttonSection}>
    {options.map(option =>  
    (<button className={s.button}
      key={option}
      onClick={onLeaveFeedback}>

        {option}
      </button>
    ))}
  </div>
)}

export default FeedbackOptions;