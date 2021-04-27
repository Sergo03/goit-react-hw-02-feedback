import React from 'react';
import Notification from '../Notification/Notification'
import PropsTypes from 'prop-types';
import style from './Style.module.css'

const Statistics = ({ good, neutral, bad, total,positivePercentage }) => {
    
    return (
        <>  {total > 0 && (
            <ul className={style.list_options}>
                <li className={style.good}>Good: {good}</li>
                <li className={style.neutral} >Neutral: {neutral}</li>
                <li className={style.bad}>Bad: {bad}</li>
                <li className={style.total}>Total: {total}</li>
                {positivePercentage ? <li className={style.positivePercentage}>Positive feedback: {positivePercentage}%</li> : <li>Positive feedback: 0%</li>}
            </ul>
        )}
            {total === 0 && <Notification message="No feedback given" />}
        </>

    )
    
};
Statistics.propTypes = {
    good: PropsTypes.number.isRequired,
    neutral: PropsTypes.number.isRequired,
    bad: PropsTypes.number.isRequired,
    total: PropsTypes.number.isRequired,
    positivePercentage: PropsTypes.number.isRequired
}



export default Statistics;