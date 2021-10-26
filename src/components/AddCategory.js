import React, { useState } from 'react';
import Proptypes from 'prop-types';
export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            setCategories(categories => [inputValue,...categories]);
            setInputValue("");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
            value={inputValue}
            onChange={(event) => setInputValue(event.target?.value) }
            type="text"
            />
        </form>
    );
}

AddCategory.propTypes = {
    setCategories: Proptypes.func.isRequired
}