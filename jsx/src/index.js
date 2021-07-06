// Import React and React DOM libraries
import React from 'react'
import ReactDOM  from 'react-dom'

// Create a react component
const App = () => {
    const buttonText = 'Click Me!';

    function getButtonText() {
        return 'Click!'
    }

    return (
        <div>
            <label className="label" htmlFor="name">
                Enter Name:
            </label>
            <input id="name" type="text"></input>
            <button style={{ backgroundColor: 'blue', color: 'white' }}>
                {getButtonText()}
            </button>
        </div>
    )
};

if (module.hot) {
    module.hot.accept();
}

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));