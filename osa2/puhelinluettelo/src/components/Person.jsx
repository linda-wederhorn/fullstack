const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const Person = ({ person, deleteFunction }) => (
  <li>
    {person.name} {person.number}{" "}
    <Button handleClick={() => deleteFunction(person.id)} text="delete" />
  </li>
);
export default Person;
