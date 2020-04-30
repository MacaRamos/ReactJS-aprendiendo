import React, { Component } from "react";
import PropTypes from 'prop-types';

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
        <input type="checkbox" onChange={this.props.checkDone.bind(this, task.id)}></input>
        <button style={btnDelete} onClick={this.props.deleteTask.bind(this, task.id)}>x</button>
      </p>
    );
  }
}

Task.propTypes = {
  task: PropTypes.object.isRequired
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
