import React from 'react';

export const FirstContext = React.createContext("default value for first context");
export const SecondContext = React.createContext({
    text: "default value for second context",
    toggle: () => {}
});
