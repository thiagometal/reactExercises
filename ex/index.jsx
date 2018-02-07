import React from 'react'
import ReactDOM from 'react-dom'
import Primeiro, {Segundo} from './component'

// ReactDOM.render(<h1>Olá React</h1>, document.getElementById('app'))
ReactDOM.render(
    <div>
        <Primeiro />
        <Segundo />
    </div>
, document.getElementById('app'))