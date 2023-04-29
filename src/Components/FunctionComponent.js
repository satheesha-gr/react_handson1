import React from 'react'

function FunctionComponent() {
  return (
    <div className="function-component">
        <h1>This is created using Functional Component</h1>
        <p className="paragraph">This is done using external CSS</p>
        <p style={{ fontFamily: "sans-serif", color: "blue" }}>
            This is done using inline CSS
        </p>
    </div>
  )
}

export default FunctionComponent