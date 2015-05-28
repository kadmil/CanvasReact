import React from 'react'

var App = React.createClass({
    render() {
        return (
            <div className='canvas-app'>Нечто совершенно иное</div>
        )
    }
})

React.render(<App/>, document.getElementById('app'))

export default App
