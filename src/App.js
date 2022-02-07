import { Component } from "react";
import "./App.css";
import CardListComponent from "./Components/CardList/CardListComponent";
import SearchBoxComponent from "./Components/SearchBox/SearchBoxComponent";

class App extends Component {
  constructor() {
    super();

    this.state = {
      students: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ students: users }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { students, searchField } = this.state;
    const filteredStudents = students.filter((student) =>
      student.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <SearchBoxComponent
          placeholder="Search Student"
          handleChange={this.handleChange}
        />
        <CardListComponent students={filteredStudents} />
      </div>
    );
  }
}

export default App;
