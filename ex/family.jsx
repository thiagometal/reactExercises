import React from 'react'
import { childrenWithProps } from '../utils/reactUtils'

export default props => (
    <div> 
        {/* {React.cloneElement(props.children, props)}  */}
        {/* o props do componete filho vai ter o mesmo atributo que o props passado ao pai */}
        {/* no exemplo a cima vc está passando diretamente a referencia da propriedade do pai para o filho */}
        {/* o ideal é passar o clone usando o spread, como está a baixo */}
        {/* {React.cloneElement(props.children, {...props})} */}
        
        { childrenWithProps(props.children, props) }
        {/* Aqui será feito um MAP que vai pegar os elementos filhos e vai devolver com as propriedades do pai */}
    </div>
)