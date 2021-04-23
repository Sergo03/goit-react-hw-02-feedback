import React from "react";



const FeedbackOptions = ({ options, onLeaveFeedback }) => {
   

    return (
        <div>
            <h1>Please leave feedback</h1>
        {
            options.map((option) => (
                <button type="button" onClick={onLeaveFeedback} name={option}>{option}</button>
        ))}
   </div> )
}


export default FeedbackOptions;