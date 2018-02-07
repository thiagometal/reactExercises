import React from 'react'
import ReactDOM from 'react-dom'
import ClassComponent from './classComponent'

// ReactDOM.render(<h1>Olá React</h1>, document.getElementById('app'))
ReactDOM.render(
    <ClassComponent label='Contador' initialValue={10} />
, document.getElementById('app'))