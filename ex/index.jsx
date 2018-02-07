import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

// ReactDOM.render(<h1>Olá React</h1>, document.getElementById('app'))
ReactDOM.render(
    <Family lastName='Metal'>
        <Member name='Thiago' />
    </Family>
, document.getElementById('app'))