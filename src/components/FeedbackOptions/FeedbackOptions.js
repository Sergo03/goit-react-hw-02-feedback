import React from "react";
import PropsTypes from 'prop-types';
import style from './Style.module.css'

const FeedbackOptions = ({ options, onLeaveFeedback }) => {

    return (
        <>
            {
                options.map((option, id) => (
                    <button type="button" className={style.button} onClick={onLeaveFeedback} name={option} key={id}>{option}</button>
                ))}
        </>)
}
FeedbackOptions.propTypes = {
    options: PropsTypes.array.isRequired,
    onLeaveFeedback:PropsTypes.func.isRequired
}

export default FeedbackOptions;