import React, { Component } from "react";

class Task extends Component {

    //Cambiar estilo si la tarea esta terminada
    StyleCompleted(){
        return{
            fontSize: '20px',
            color: this.props.task.done ? 'gray' : 'black',
            textDecoration: this.props.task.done ? 'line-through' : 'none'
        }
    }
  render() {
    const { task } = this.props; // del OBJETO props voy a extraer task
    return (
      <p style={this.StyleCompleted()}>
        {task.title} - {task.description} - {task.done} - {task.id}
        <input type="checkbox"></input>
        <button style={btnDelete}>x</button>
      </p>
    );
  }
}
//Puedo crear constantes o variables en cuaquier parte del archivo js y
//llamarlo en cualquier parte sin this (incluso dentro de una clase),
//el this solo se usa dentro de una clase
const btnDelete = {
  backgroundColor: "red",
  color: "#fff",
  borderRadius: "50%",
  border: "none",
  fontSize: "18px",
  padding: "10px 15px",
  cursor: "pointer",
};

export default Task;
