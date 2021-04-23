import React, { Component } from 'react';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics' 
import Section from './components/Title/title'


class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    onFeed = e => {
        
        const name = e.currentTarget.name
      
        this.setState(prevState => {
            return { [name]: prevState[name] + 1 }
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
        const arr = ['good', 'neutral', 'bad'];
     const { good, neutral, bad } = this.state;
        return (
            <div>
                <Section title='Please leave feedback'>
                     <FeedbackOptions options={arr} onLeaveFeedback={this.onFeed} />
                </Section>
                <Section title='Statistics'>
                    < Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} />
                </Section>

            </div>
    )
    }


}

export default App;