import React from 'react';

// Class component: can have state
class App extends React.Component {
    render() {
        // this.props.(the name of the prop from App.js)
        let txt = this.props.txt
        return <h1>{txt}</h1>
    }
}

// PropTypes are deprecated
App.propTypes = {
    txt: React.PropTypes.string,
    cat: React.PropTypes.number
}

export default App

