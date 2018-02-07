import React from 'react'

export default props => (
    <div> 
        {React.cloneElement(props.children, props)} 
        {/* o props do componete filho vai ter o mesmo atributo que o props passado ao pai */}
    </div>
)