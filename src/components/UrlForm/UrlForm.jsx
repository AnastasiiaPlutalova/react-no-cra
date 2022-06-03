import React, { useState } from 'react';
import { TextInput } from '../../units';

import './UrlForm.scss';

const UrlForm = () => {
    const [url, setUrl] = useState();
    const [error, setError] = useState();

    const handleUrlChange = () => {
        console.log(1);
    }

    return (
        <form className='url-form'>
            <TextInput
                name="url"
                label="URL"
                placeholder="URL"
                value={url}
                onChange={handleUrlChange}
                error={error}
            />
            <div>
                <input type="submit" value="Shorten URL" />
            </div>
        </form>
    );
}

export default UrlForm;
