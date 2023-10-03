import axios from "axios";
import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");

  useEffect(() => {
    console.log("effect");
    axios.get("http://localhost:3001/persons").then((response) => {
      console.log("promise fulfilled");
      setPersons(response.data);
    });
  }, []);

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value);
  };

  const nameInPhonebook = (name) =>
    persons.some((person) => person.name == name);

  const addPerson = (event) => {
    event.preventDefault();
    if (nameInPhonebook(newName))
      alert(`${newName} is already added to phonebook`);
    else {
      const personObject = {
        name: newName,
        number: newNumber,
      };

      setPersons(persons.concat(personObject));
      setNewName("");
      setNewNumber("");
    }
  };

  const personsToShow =
    newFilter === ""
      ? persons
      : persons.filter((person) =>
          person.name.toLowerCase().includes(newFilter)
        );

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterText={newFilter} changeFunction={handleFilterChange} />

      <h3>Add a new</h3>
      <PersonForm
        submitFunction={addPerson}
        nameValue={newName}
        nameChangeFunction={handleNameChange}
        numberValue={newNumber}
        numberChangeFunction={handleNumberChange}
      />

      <h2>Numbers</h2>
      <Persons filteredPersons={personsToShow} />
    </div>
  );
};

export default App;
