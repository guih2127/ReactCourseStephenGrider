// Import React and React DOM libraries
import React from 'react'
import ReactDOM  from 'react-dom'

// Create a react component
const App = () => {
    return <div>Hi there!</div>;
};

if (module.hot) {
    module.hot.accept();
}

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));