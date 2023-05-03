import React, {Component} from 'react';
// import Feedback from './FeedbackOptions/FeedbackOptions';



export class App extends Component{
  // const Feedback = () =>{
      state = {
          good: 0,
          neutral: 0,
          bad: 0
        }





  handleGood=()=>{
      this.setState(({good})=>({good:good+1}))
      
  }
  handleNeutral=()=>{
      this.setState(({neutral})=>({neutral:neutral+1}))
  
  }
  handleBad=()=>{
      this.setState(({bad})=>({bad:bad+1}))
  
  }
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
  };
  countFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    return Math.round(((good + neutral) / (good + neutral + bad)) * 100);
  };


 render(){
  return (
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
    >
      <div>
        <h2>Please leave feedback</h2>
        <button onClick={this.handleGood}>Good</button>
        <button onClick={this.handleNeutral}>Neutral</button>
        <button onClick={this.handleBad}>Bad</button>
       
      </div>
      <div>
        <h2>Statistics</h2>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
        <p>Total: {this.countTotalFeedback()}</p>
        <p>Bad: {this.countFeedbackPercentage()}</p>

      </div>
        
    </div>
  );

};
}
