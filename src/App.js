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
    this.lastSearch = "";
  }

  componentDidMount() {
    const staticPersons = ["dariel", "marcos", "guelmis", "victor"].map((person) => {
      return {
        name: person.charAt(0).toUpperCase() + person.substr(1, person.length),
        email: `${person}-monster@codegenio.com`,
        image: `${process.env.PUBLIC_URL}/assets/img/${person}-zombie.jpg`
      };
    });
  
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        this.setState({
          monsters: staticPersons.concat(users),
        });
      });
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

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
        <h1>Monsters RoloDex</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
