import React from 'react'
import Column from './Column'

var Row = React.createClass({
    render() {
        var columns = this.props.rowModel.map((columnModel, index) => (<Column columnModel={columnModel} key={index}></Column>))
        return (
            <div className='row'>{columns}</div>
        )
    }
})

export default Row
