import axios from "axios";
import personService from "./services/persons";
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
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
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

      personService.addPerson(personObject).then((returnedPersonObject) => {
        setPersons(persons.concat(returnedPersonObject));
        setNewName("");
        setNewNumber("");
      });
    }
  };

  const deletePerson = (id) => {
    const personToDelete = persons.find((person) => person.id === id);
    if (
      window.confirm(`Do you really want to delete ${personToDelete.name}?`)
    ) {
      console.log(`Deleted ${personToDelete.name}`);
      personService.deletePerson(id);
      const updatedPersons = persons.filter((person) => person.id !== id);
      setPersons(updatedPersons);
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
      <Persons filteredPersons={personsToShow} deleteFunction={deletePerson} />
    </div>
  );
};

export default App;
