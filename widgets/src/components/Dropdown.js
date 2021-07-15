import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ options, selectedValue, setSelectedValue }) => {
    const renderedOptions = options.map(option => {
        if (option.value === selectedValue.value) {
            return null;
        }

        return (
            <div className="item" key={option.value} onClick={() => setSelectedValue(option)}>
                {option.label}
            </div>
        );
    });

    useEffect(() => {
        console.log(selectedValue);
    }, [selectedValue, options]);

    return (
        <div className="ui form">
            <div className="field">
                <label className="label">Select a Color</label>
                <div className="ui selection dropdown visible active">
                    <i className="dropdown icon"></i>
                    <div className="text">{selectedValue.label}</div>
                    <div className="menu visible transition">
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;