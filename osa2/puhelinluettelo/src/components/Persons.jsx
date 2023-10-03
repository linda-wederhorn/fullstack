import Person from "./Person";

const Persons = ({ filteredPersons, deleteFunction }) => (
  <ul>
    {filteredPersons.map((person) => (
      <Person
        person={person}
        key={person.name}
        deleteFunction={deleteFunction}
      />
    ))}
  </ul>
);

export default Persons;
