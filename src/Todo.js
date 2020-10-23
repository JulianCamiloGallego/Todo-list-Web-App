import React, {Component} from 'react';
import { removeTodo } from './actionCreators';

const Todo = ({task,removeTodo}) => <li>{task} <button onClick={removeTodo}>X</button></li>; //Destructuting the task passed in the TodoList component and returning a li with the task as the text

export default Todo;