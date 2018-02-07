import React, { Component } from  'react'

export default class ClassComponent extends Component {
    render () {
        return ( 
            <h1>{ this.props.value }</h1>
        ) 
    } // função obeigatório em componentes criados em classe
}