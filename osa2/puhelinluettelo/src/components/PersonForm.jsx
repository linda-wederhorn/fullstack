const PersonForm = ({
  submitFunction,
  nameValue,
  nameChangeFunction,
  numberValue,
  numberChangeFunction,
}) => (
  <form onSubmit={submitFunction}>
    <div>
      name: <input value={nameValue} onChange={nameChangeFunction} />
    </div>
    <div>
      number: <input value={numberValue} onChange={numberChangeFunction} />
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
);

export default PersonForm;
