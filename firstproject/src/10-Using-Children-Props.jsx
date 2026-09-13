import React from 'react'

export default function ChildrenProps({ children }) {


    return (
        <div>
            <h1>Children Props</h1>
            {/* 1 */}
            {/* <p>{props.children}</p> */}
            {/* 2 */}
            {children}
        </div>
    )
}
