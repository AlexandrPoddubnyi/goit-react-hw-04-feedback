import { Component } from "react";
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {

state = {
  good: 0,
  neutral: 0,
  bad: 0
  }
  
handleVote = key => {
    this.setState(prevState => ({
       [key]: prevState[key] + 1
    }))  
}
  
  cauntingTotal = () => { 
    const total = Object.values(this.state).reduce((acc, feed) => acc + feed, 0);
    return total;
  }

  cauntingPositiveFeeds = () => {
    const positiveFeeds = this.state.good / this.cauntingTotal() * 100;
    return Math.round(positiveFeeds)
  }
 

  render() {
    
    
    const { good, neutral, bad, } = this.state;
console.log(this.state)
    return (
      <div
      style={{
        height: '100vh',
        margin: 200 ,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40, 
        color: '#010101'
      }}><Section title="Please leave feedback">
          <FeedbackOptions options={Object.keys(this.state)} handleVote={this.handleVote}></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          {this.cauntingTotal() ? <Statistics good={good} neutral={neutral} bad={bad} total={this.cauntingTotal()} positivePercentage={this.cauntingPositiveFeeds()}></Statistics> : <Notification message="No feedback"></Notification>}
        </Section>
      </div>
    )
  }
};