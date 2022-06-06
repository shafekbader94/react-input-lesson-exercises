import React, { Component } from "react";

class Exercise2 extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      fruit: "",
    };
  }

  updateFruit = (event) => {
    const name = event.target.name
    const value = event.target.value
    if(name === "name"){
    this.setState({
        name:value
    })
    }
        else{
    this.setState({
        fruit:value
    }, () =>{
        console.log((`${this.state.name} selected ${this.state.fruit}`))
    })
}
}

  render() {
    return (
      <div>
        <input id="name-input" name="name" value={this.state.name} onChange={this.updateFruit} />
        <select id="select-input" name="fruit" onChange={this.updateFruit}>
            <option value="Apple">Apple</option>
            <option value="Pineapple">Pineapple</option>
            <option value="Watermelon">Watermelon</option>
            <option value="Orange">Orange</option>

        </select>
      </div>
    );
  }
}

export default Exercise2;
