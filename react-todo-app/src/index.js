import React from "react"
import ReactDOM from "react-dom"
//component file
import "./App.css"
import TodoContainer from "./components/TodoContainer"
ReactDOM.render(<TodoContainer />, document.getElementById("root"))

// const element = <h1>Hello from Create React App</h1>

// ReactDOM.render(element, document.getElementById("root"))

ReactDOM.render(
    <React.StrictMode>
      <TodoContainer />
    </React.StrictMode>,
    document.getElementById("root")
  )