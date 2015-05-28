import React from 'react'

var Card = React.createClass({
    render() {
        return (
            <div className='card'>{this.props.model.label}</div>
        )
    }
})

export default Card
