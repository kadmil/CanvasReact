import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Row from './Row'

var App = React.createClass({
    getInitialState() {
            return {
                model: [
                    [
                        [{
                            label: 'Партнеры'
                        }],
                        [{
                            label: 'Деятельность'
                        }, {
                            label: 'Ресурсы'
                        }],
                        [{
                            label: 'Ценностное предложение'
                        }],
                        [{
                            label: 'Отношения с клиентами'
                        }, {
                            label: 'Каналы распространения'
                        }],
                        [{
                            label: 'Сегменты потребителей'
                        }]
                    ],
                    [
                        [{
                            label: 'Расходы'
                        }],
                        [{
                            label: 'Доходы'
                        }]
                    ]
                ]
            }
        },
        render() {
            var rows = this.state.model.map((modelLevel, index) => (<Row rowModel={modelLevel} key={index}></Row>))
            return (
                <div className='container'><Header></Header><div className='canvas-app'>{rows}</div><Footer></Footer></div>
            )
        }
})

React.render(<App/>, document.getElementById('app'))

export default App
