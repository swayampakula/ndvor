import React, { Component } from "react";
import PersonList from "../../components/PersonList/PersonList";


class Home extends Component {
    state = {
        persons: [],
        error: ""
    }


    componentDidMount = async () => {
        try {
            let response = await fetch("/api/persons/")
            let data = await response.json()

            let copy = [ ...this.state.persons ]
            copy = [...copy, ...data]
            this.setState({
                persons: copy
            })
        } catch (error) {
            console.log(error);
            this.setState({ error: error.message })
        }

    }

    displayPersonDetails = (id) => {
        this.props.history.push(`/person/${id}`)
    }

    render() {
        let { persons } = this.state
        return (
            <div>

                <PersonList displayPersonDetails={this.displayPersonDetails} persons={persons} />
            </div>
        )
    }
}

export default Home