import React from "react"
import TodosList from "./TodosList";
import Header from "./Header"
import InputTodo from "./InputTodo"
import { v4 as uuidv4 } from "uuid";
import "../App.css"
class TodoContainer extends React.Component {

    state = {
      // todos: [],
        todos: [
          {
            id: uuidv4(),
            title: "Setup development environment",
            completed: true
          },
          {
            id: uuidv4(),
            title: "Develop website and add content",
            completed: true
          },
          {
            id: uuidv4(),
            title: "Deploy to live server",
            completed: false
          },
          {
            id: uuidv4(),
            title : "place a MediaMetadata",
            completed: false
          }
        ]
       };

       handleChange = id => {
        this.setState(prevState => ({
          todos: prevState.todos.map(todo => {
            if (todo.id === id) {


              return {
                ...todo,
                completed: !todo.completed,
              }
            }
            return todo
          }),
        }))
      };
      delTodo = id => {
        this.setState({
          todos: [
            ...this.state.todos.filter(todo => {
              return todo.id !== id;
            })
          ]
        });
      };
      addTodoItem = title => {
        const newTodo = {
          id: 4,
          title: title,
          completed: false
        };
        this.setState({
          todos: [...this.state.todos, newTodo]
        });
      };

      componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/todos")
          .then(response => response.json())
          .then(data => console.log(data));
      }

       render() {
        return (
          <div className="container">
          <div className="inner">
            <Header />
            <InputTodo addTodoProps={this.addTodoItem}/>
            <TodosList todos={this.state.todos} handleChangeProps={this.handleChange} deleteTodoProps={this.delTodo}/>
          </div>
          </div>
        );
      }
      
}
export default TodoContainer