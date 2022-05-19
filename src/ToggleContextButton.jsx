import React from 'react';
import { SecondContext } from './context';

function ToggleContextButton () {
    return (
        <SecondContext.Consumer>
            {({toggle}) => (<button onClick={toggle}>Toggle Context</button>)}
        </SecondContext.Consumer>
    );
}

export default ToggleContextButton;
