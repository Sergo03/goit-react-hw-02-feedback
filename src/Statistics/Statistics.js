import React from 'react';


const Statistics = ({ good, neutral, bad, total,positivePercentage }) => {
    
    return (
        <div>
            <h2>Statistics</h2>
            <ul>
                <li>{good}</li>
                <li>{neutral}</li>
                <li>{bad}</li>
                <li>{total}</li>
                { positivePercentage?<li>{positivePercentage}</li>:null}
            </ul>
        </div>

    )
    
};

export default Statistics;