import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");

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
