import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

class App extends React.Component{
  test(){
    console.log("hello world")
  }
   r = "a"
  render(){
    return(
      <>
      <h1 style={{
        color: this.r == 'a' ? "red" : this.r == 'b' ? "blue" : "green"
      }}>{this.test()}</h1>
        <Header/>
        <Main num={123}/>
        <Footer/>
      </>
    )
  }
}

export default App