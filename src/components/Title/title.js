import React from 'react';
import PropsTypes from 'prop-types';



const Section = ({ title, children }) => {
    
    return (
        <section>
            <h2>{title}</h2>
            {children}
        </section>
    )

}

Section.propsTypes = {
    title: PropsTypes.string.isRequired,
    children: PropsTypes.object.isRequired
}

export default Section;