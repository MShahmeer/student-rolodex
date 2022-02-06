import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      students: [
        {
          name: "Shahmeer",
          id: "135",
        },
        {
          name: "Ali",
          id: "129",
        },
        {
          name: "Ibrahim",
          id: "014",
        },
        {
          name: "Abdullah",
          id: "077",
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.students.map((student) => (
          <h1 key={student.id}>{student.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;