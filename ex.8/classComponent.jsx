import React, { Component } from  'react'

export default class ClassComponent extends Component {
    constructor(props) {
        super(props)
        this.state = { value: props.initialValue }
    }

    sum (delta) {
        this.setState({ value: this.state.value + delta }) 
        //pega o estado atual, replica esse obj dentro desse cara delimitado por chaves e altera o valor para essa nova variável
        
        // o dado não é alterado
        // quando vc usa o setState vc está evoluindo o estado do componente, 
        // aqui vc está dando um novo objeto ao estado, ele permanece com o rastro do histórico de estados do componente
        // vc passa um novo objeto e não altera o já existente 
    }

    render () {
       // this.props.value++ //os atributos de props não podem ser alterados, pois são only ready
        return ( 
            <div>
                <h1>{ this.props.label } </h1>
                <h2>{ this.state.value } </h2>
                {/* <button onClick={this.sum(-1)} > </button>  */}
                {/* dessa forma só está havendo a chamada da função que vai retornar o valor undefinied, 
                vc só vai estar ligando o resultado. 
                O que vc quer é passar uma função em si e não uma chamada a uma função*/}
                <button onClick={() => this.sum(-1)} > Dec </button> {/*vc deve vincular uma função ao evento onclick. função arrow que não recebe nenhum parametro e chama a função this.sum()*/}
                <button onClick={() => this.sum(1)} > Inc </button>
            </div>
        ) 
    } // função obeigatório em componentes criados em classe
}