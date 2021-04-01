import React from 'react'

const Badge = (props)=> {
    return (
        <li className="list-inline-item"><span className="badge label-theme">{props.label}</span></li>                   
    )
}
export default Badge