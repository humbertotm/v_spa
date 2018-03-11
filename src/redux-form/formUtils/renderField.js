// Don't know exactly why, but I must import React to make this
// function work. Perhaps it has to do with the fact that it is being
// treated as a component where it is called.
import React from 'react';

export function renderField({ input, label, type, meta: { touched, error } }) {
        return(
            <div>
                <label>{label}</label>
                <div>
                    <input {...input} placeholder={label} type={type} />
                    {touched && error && <span>{error}</span>}
                </div>
            </div>
        );
    }