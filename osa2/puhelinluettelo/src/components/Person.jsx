const Person({submitFunction}) => (
  <>
  <div>
    name: <input value={newName} onChange={handleNameChange} />
  </div>
  <div>
    number: <input value={newNumber} onChange={handleNumberChange} />
  </div>
  </>
)

export default Person