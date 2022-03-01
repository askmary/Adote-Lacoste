import React from "react"
import "./App.css"
import lacostinho from "./Lacostinho.jpg"
import croquinho from "./Croquinho.jpg"
import jacarezinho from "./Jacarézinho.jpg"
import lagartixinha from "./Lagartixinha.jpg"
import pablo from "./Pablo.jpg"
import lulu from "./Lulu.jpg"

export default class App extends React.Component{
  state = {
    alligator:[{name:'Lacostinho', breed:'Lacoste', age:'5 years', image:<img className="lacostinho" src={lacostinho}/>},
    {name:'Croquinho', breed:'Crocodile', age:'9 years', image:<img className="croquinho" src={croquinho}/>},
    {name:'Jacarézinho', breed:'Alligator sinensis', age:'2 years', image:<img className="jacarezinho" src={jacarezinho}/>}],
    lizard:[{name:'Lagartixinha', breed:'Lizard caseiro', age:'10 years', image:<img className="lagartixinha" src={lagartixinha}/>},
    {name:'Pablo', breed:'V. komodoensis', age:'12 years', image:<img className="pablo" src={pablo}/>},
    {name:'Lulu', breed:'Ball', age:'3 years', image:<img className="lulu" src={lulu}/>}],
    clear:[],
    list:[]
  }
  alligator = () => {
    let {alligator} = this.state
    this.setState({list: alligator.map((item) => (
      <div className="alligator-container">
        <h2>Alligator's name: {item.name}</h2>
        <div>{item.image}</div>
        <h2>Breed: {item.breed}</h2>
        <h2>Age: {item.age}</h2>
      </div>
    ))})
  }
  lizard = () => {
    let {lizard} = this.state
    this.setState({list: lizard.map((item) => (
      <div className="lizard-container">
        <h2>Lizard's name: {item.name}</h2>
        <div>{item.image}</div>
        <h2>Breed: {item.breed}</h2>
        <h2>Age: {item.age}</h2>
      </div>
    ))})
  }
  clear = () => {
    let {clear} = this.state
    this.setState({list:clear.map((item) => (
      <div>{item.list}</div>
    ))})
  }
  render(){
    return(
      <div>
        <div className="buttons-div">
          <h1>Adote seu Lacoste</h1>
          <button onClick={this.alligator}>Alligator/Crocodile</button>
          <button onClick={this.lizard}>Lizard</button>
          <button onClick={this.clear}>Clear</button>
        </div>
        <h2>{this.state.list}</h2>
      </div>
    )
  }
}
