import React from 'react';

const FancyInput = React.forwardRef((props, ref) => {
    return <input type='text' ref={ref} />;
});

export default FancyInput;
