import React from 'react';
import FancyInput from './FancyInput';

const Form = () => {
    const refFileInput = React.createRef();
    const refTextInput = React.createRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(refFileInput.current.files);
    }

    const onFileChange = () => {
        refTextInput.current.focus();
    }

    return <form onSubmit={handleSubmit}>
        <input type="file" ref={refFileInput} onChange={onFileChange} />
        <FancyInput ref={refTextInput} />
        <input type='submit' />
    </form>
}

export default Form;
