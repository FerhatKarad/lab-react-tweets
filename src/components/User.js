import React from 'react'
import Tweet from './Tweet'

export default function User(props) {
    return (
        <div>
            <span className="user">{props.name}</span>
            <span className="user">{props.handle}</span>
        </div>
    )
}
