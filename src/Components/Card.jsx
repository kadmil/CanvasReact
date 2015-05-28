import React from 'react'

var Card = React.createClass({
    render() {
        return (
            <div className='card'>
                <label for="area">{this.props.model.label}</label>
                <textarea id="area" value={this.props.model.value}></textarea>
            </div>
        )
    }
})

export default Card
