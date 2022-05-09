import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const CountClicks = () => {
    const [clicks, setClicks] = useState(0);

    return React.createElement(
        'div',
        null, 
        [
            React.createElement(Button, {children: 'Click', onClick: () => setClicks(clicks + 1)}),
            React.createElement(Text, {text: `clicks: ${clicks}`}),
        ]
    );
};

const Button = (props) => {
    return React.createElement('button', {...props});
};

const Text = (props) => {
    return React.createElement('span', null, `${props.text}`); 
}

const App = (props) => {
    return React.createElement('div', null, props.children);
};

ReactDOM.render(
    React.createElement(App, null, React.createElement(CountClicks)),
    document.querySelector('#root')
);
