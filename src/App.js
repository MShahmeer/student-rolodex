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

  render() {
    const { students, searchField } = this.state;
    const filteredStudents = students.filter((student) =>
      student.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <SearchBoxComponent 
          placeholder="Search Student"
          handleChange = {(e) => this.setState({ searchField: e.target.value })}
        />
        <CardListComponent students={filteredStudents} />
      </div>
    );
  }
}

export default App;
