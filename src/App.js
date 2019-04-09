import React from 'react';

// Class component: can have state
class App extends React.Component {
    render() {  //('element', props(properties), 'another element or a string representing our element content')
        // return React.createElement('h1', null, 'Hello Eggheads')
        return (
            <div>
                <h1 className="classIsAReservedKeyName">Hello World</h1>
                <strong>Bold</strong>
            </div>
        )
    }
}

// Stateless function component
// const App = () => <h1>Hello Greg</h1>
export default App

