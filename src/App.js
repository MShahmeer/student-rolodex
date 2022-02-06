import { Component } from "react";
import "./App.css";
import CardListComponent from "./Components/CardList/CardListComponent"

class App extends Component {
  constructor() {
    super();

    this.state = {
      students: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ students: users }));
  }

  render() {
    return (
      <div className="App">
        <CardListComponent students = {this.state.students}/>
      </div>
    );
  }
}

export default App;
