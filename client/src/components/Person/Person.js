import React from "react"


const Person = (props) => (
    <div className="person" onClick={() => props.displayPersonDetails(props.id)}>
            <p>  {props.name}</p>
    </div>
)

export default Person