import React, { Component } from "react";
import "./App.css";



class HelloWorld extends Component{

  state = {
    show: true
  }

  toggleShow = () =>{
    this.setState({show: !this.state.show});
  }

  render(){
    if (this.state.show) {
      return(
        <div id="hello"><h1>{this.props.mytext}</h1>
          {this.props.subtitule}
          <button onClick={this.toggleShow} >Toggle show</button>
        </div>
      );
    } else {
      return(
        <div>No hay nada que mostrar
        <button onClick={this.toggleShow} >Toggle show</button>
        </div>
      );
    }
  }
}

function App() {
 
  return (
    <div>
      Este es mi primer componenete en ReactJS:
      <HelloWorld mytext="componente 1" subtitule="chao componente"/>
      <HelloWorld mytext="componente 2" subtitule="chao componente 2"/>
      <HelloWorld mytext="componente 3" subtitule="chao componente 3"/>
    </div>
  );
}

export default App;
