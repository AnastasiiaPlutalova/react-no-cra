import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import './TextInput.scss';

const TextInput = ({type, name, label, placeholder, value, onChange, error, classNames}) => {
    return (
        <div className="text-input">
            <label className="text-input__label" htmlFor={name}>{label}</label>
            <input
                id={name}
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={cn(['text-input__input', {error: !!error}, classNames])}
            />
            {error && <div className='text-input__error'>{error}</div>}
        </div>
    );
}

TextInput.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string,
    classNames: PropTypes.string
};

TextInput.defaultProps = {
    type: 'text',
};

export default TextInput;
