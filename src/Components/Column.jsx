import React from 'react'
import Card from './Card'

var Column = React.createClass({
    render() {
        var cards = this.props.columnModel.map((modelElement, index)=>{
            console.log(modelElement)
            return (<Card model={modelElement} key={index}></Card>)
        })
        return (
            <div className='column'>{cards}</div>
        )
    }
})

export default Column
