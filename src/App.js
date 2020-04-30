import React, { Component } from "react";
import "./App.scss";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      search: "",
    };
    this.onSearchChange = this.onSearchChange.bind(this);
    this.lastSearch = "";
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        this.setState({
          monsters: users,
        });
      });
  }

  onSearchChange(e) {
    this.setState({ searchField: e.target.value });
  }

  render() {
    const { monsters, searchField } = this.state;
    let filteredMonsters = monsters;
    if (this.lastSearch !== searchField && searchField) {
      filteredMonsters = monsters.filter((monster) => {
        return monster.name.toLowerCase().includes(searchField.toLowerCase());
      });
    }
    this.lastSearch = searchField;
    return (
      <div className="App">
        <SearchBox
          placeholder="search monsters"
          handleChange={this.onSearchChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
