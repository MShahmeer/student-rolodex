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
        <CardListComponent>
          {this.state.students.map((student) => (
            <h1 key={student.id}>{student.name}</h1>
          ))}
        </CardListComponent>
      </div>
    );
  }
}

export default App;
