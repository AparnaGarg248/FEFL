import React from "react";

class Main extends React.Component{
  render(){
    return(
        <div style={{
            height: "60px", 
            backgroundColor: "white",
            color: "blue",
        }}>
            <h1>main section {this.props.num}</h1> 
        </div>
        )
    }
}

export default Main