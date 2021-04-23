import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics' 


class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    onFeed = e => {
        
        const name = e.currentTarget.name
      
        this.setState(prevState => {
            return { [name]: this.state[name] + 1 }
        })
    }
    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    }
    countPositiveFeedbackPercentage = () => {
        const { good, neutral, bad } = this.state;

        return  Math.round(good / (good + neutral + bad)*100) ;
    }

 

    render() {
const { good, neutral, bad } = this.state;
       

        return (
            <div>
               
                <FeedbackOptions options={['good','neutral','bad']} onLeaveFeedback={this.onFeed}/>
                 < Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} />
            </div>
    )
}


}

export default App;