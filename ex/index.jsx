import React from 'react'
import ReactDOM from 'react-dom'
import ClassComponent from './classComponent'

// ReactDOM.render(<h1>Olá React</h1>, document.getElementById('app'))
ReactDOM.render(
    <ClassComponent value='Componente com Base em Classe' />
, document.getElementById('app'))