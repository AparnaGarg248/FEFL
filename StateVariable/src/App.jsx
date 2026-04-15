import React, {Component} from "react";

export class App extends Component{
  
  // State variable updates the UI not any normal/regular variable
  state = {
    count : 0
  }

  // this keyword is pointing to incr(itself) instead of count
  // incr() {
  //   this.count++;
  // }

  // In arrow function, this points to the parent or global element which in this case is count
  incr = () => {
    // this.state.count++;
    this.setState(() => { // Setter function | Whatever is returned is set to state variable
      return {
        count: this.state.count + 1
      }
    })
    // console.log(this.state.count);
  }

  render(){
    return(
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.incr}>+</button>
      </div>
    )
  }
}

export default App