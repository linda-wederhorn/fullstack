import Person from "./Person";

const Persons = ({ filteredPersons }) => (
  <ul>
    {filteredPersons.map((person) => (
      <Person person={person} key={person.name} />
    ))}
  </ul>
);

export default Persons;
