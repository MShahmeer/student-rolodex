import { Component } from "react";
import "./App.css";
import CardListComponent from "./Components/CardList/CardListComponent";

class App extends Component {
  constructor() {
    super();

    this.state = {
      students: [],
      searchFiled: "",
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
        <input
          type="search"
          placeholder="Search Stundent"
          onChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <CardListComponent students={this.state.students} />
      </div>
    );
  }
}

export default App;
