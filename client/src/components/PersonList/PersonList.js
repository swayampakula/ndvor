import React from "react";
import Person from "../Person/Person";

const PersonList = (props) => {
    return (
    <div className="persons-list">
        <center>
        <h4> Persons List</h4>
        </center>
            
        {
            props.persons.map((person) => {
                return (
                    <React.Fragment key={person._id}>
                        <Person displayPersonDetails={props.displayPersonDetails} name={person.name} id={person._id}></Person>
                    </React.Fragment>
                )
            })
        }
    </div>
)
    }


export default PersonList