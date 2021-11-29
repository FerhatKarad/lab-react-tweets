import React from 'react'
import Tweet from './Tweet'



export default function ProfileImage(props) {
    return (
        <div>
            <img className="profile" src={props.image} /> 
             
        </div>
    )
}
