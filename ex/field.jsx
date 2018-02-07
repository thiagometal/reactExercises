import React, { Component } from 'react'

class Field extends Component {
    constructor(props) {
        super(props)
        this.state = { value: props.initialValue }
        this.handleChange = this.handleChange.bind(this) //sem isso o this não vai apontar para o Field dentro da função, 
        //pois quando o onChange chama a função o contexto não é o da classe Field 
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }

    render() {
        return (
            <div>
                <label>{ this.state.value }</label><br />
                <input onChange={this.handleChange} value={this.state.value} />
                {/* <input value={this.state.value} /> */}
                {/* retirando o OnChange não haverá mudanças. Isso é o que o React chame de Controled Component
                diferente do Angular que tem o twoWayDataBind[DOM e JS]
                No React o Estado controlado pelo JS é absoluto, este estado é o que comanda o que se vê na tela,
                ou seja não é a partir da tela que vc atualiza o estado e sim a partir do Js do estado do seu componente
                é que a atualização do componente na página será feita, vc não tem informação sendo gerada da DOM para o componente
                o seu código js que vai ser atualizado na DOM
                
                Alterou o estado do objeto atual, o método render é invocado e o componente é renderizado
                
                Se o componente é controlado quem detem o controle do dado é o estado interno do componente e não a página.
                vc gera um evento a partir da DOM, esse evento é capturado é chamado uma função que evolui o estado, com o estado evoluído o cponente é renderizado.*/}
            </div>
        )
    }
}

export default Field