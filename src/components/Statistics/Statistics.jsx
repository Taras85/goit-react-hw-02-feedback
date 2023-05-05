import React from "react";
import s from './Statistics.module.css'

const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
  console.log(positivePercentage)
  return (
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive Feedback: {positivePercentage}%</li>
    </ul>
)}

export default Statistics;