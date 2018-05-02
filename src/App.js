import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      {
        id: 1,
        name: "Max",
        age: 23
      },
      {
        id: 2,
        name: "deaf",
        age: 23
      }
    ],
    showPersons: false
  };

  switchNamesHandler = newName => {
    console.log("click");
    this.setState({
      persons: [
        {
          id: 1,
          name: newName,
          age: 23
        }
      ]
    });
  };

  changeNamesHandler = event => {
    console.log("click");
    this.setState({
      persons: [
        {
          name: event.target.value,
          age: 23
        }
      ]
    });
  };

  changeNamesKeyHandler = (event, id) => {
    console.log(event);
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  toggleNamesHandler = () => {
    const showPersons = this.state.showPersons;
    this.setState({ showPersons: !showPersons });
  };
  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };
  render() {
    let persons = null;
    let personsArray = null;
    const style = {
      backgroundColor: "white",
      border: "1px solid blue",
      font: "inherit",
      padding: "8px",
      cursor: "pointer"
    };
    /*if (this.state.showPersons) {
      persons = (
        <div>
          <Person name={this.state.persons[0].name} change={this.changeNamesHandler} />
          <Person name="Radsj" click={this.switchNamesHandler.bind(this, 'Dude')}>My Hobbies</Person>
          <Person name="Radj" click={() => this.switchNamesHandler('Broo')} /> </div>
      )
    }*/
    if (this.state.showPersons) {
      personsArray = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                delete={() => this.deletePersonHandler(index)}
                name={person.name}
                key={person.id}
                change={event => this.changeNamesKeyHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
    }
    return (
      <div className="App">
        <h1>welcome</h1>
        <button
          style={style}
          onClick={this.switchNamesHandler.bind(this, "HAHA")}
        >
          Switch Names
        </button>
        <button style={style} onClick={this.toggleNamesHandler}>
          Toggle Names
        </button>
        {persons}
        {personsArray}
      </div>
    );
  }
}

export default App;
