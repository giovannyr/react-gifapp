import React, { useState } from "react";
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputValue = (evt) => {
        setInputValue(evt.target.value);
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if(inputValue.trim().length > 2){
            setCategories( categories => [inputValue, ...categories]);
            setInputValue('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={inputValue} onChange={handleInputValue} />
        </form>
    );
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
