import React from 'react'
import Member from './member'

export default props => ( 
    //4 instâncias do componente Member
    <div>
        <Member name="Ozzy" lastName="Osbuorne" />  
        <Member name="James" lastName="Hetfield" />
        <Member name="Tuomas" lastName="Youngblood" />
        <Member name="Oliver" lastName="Polatai" />
    </div>
)