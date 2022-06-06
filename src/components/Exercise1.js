import React, { Component } from 'react';

class Exercise1 extends Component {

    constructor() {
        super()
        this.state = {
            name: "",
            age: ""
        }
    }

    updateNameAndAge = (event) => {
        const name = event.target.name
        const value = event.target.value
        this.setState({
            [name]: value
        })
    }


    alertText = () => alert(`Come in ${this.state.name} you’re ${this.state.age} - that's good enough`)

    render() {
        return (
            <div>
                <input id="name-input" name="name" value={this.state.name} onChange={this.updateNameAndAge} />
                <input id="age-input" name="age" value={this.state.age} onChange={this.updateNameAndAge}/>
                <button onClick={this.alertText}>Go to Bar</button>
            </div>
        );
    }
}

export default Exercise1;