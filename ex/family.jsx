import React from 'react'

export default props => (
    <div> 
        {/* {React.cloneElement(props.children, props)}  */}
        {/* o props do componete filho vai ter o mesmo atributo que o props passado ao pai */}
        {/* no exemplo a cima vc está passando diretamente a referencia da propriedade do pai para o filho */}
        {/* o ideal é passar o clone usando o spread, como está a baixo */}
        {React.cloneElement(props.children, {...props})}
    </div>
)