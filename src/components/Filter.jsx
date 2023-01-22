import React, { useState } from "react";
import "../styles/react/Filter.css";

const Filter = (props) => {
    const handleChange = (event) => {
        const { value } = event.target;
        props.updateFilter(value)
    }

    return (
        <div className="choices">
            {props.choices.map((choice, index) => (
                <>
                    <input type="radio"
                        key={choice}
                        id={choice}
                        name="choice"
                        value={choice.toLowerCase()}
                        onChange={handleChange}
                        defaultChecked={index === 0} />
                    <label key={`${choice}-label`} htmlFor={choice}>{choice}</label>
                </>
            ))}
        </div>
    )
}

export default Filter;