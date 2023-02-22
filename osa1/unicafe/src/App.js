import { useState } from 'react'

const Display = props => <div>{props.value}</div>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const voteGood = () => {
    const newAll = all + 1
    setAll(newAll)
    const newGood = good + 1
    setGood(newGood)
    console.log("good:", newGood)
    console.log("all:", newAll)
  }

  const voteNeutral = () => {
    const newAll = all + 1
    setAll(newAll)
    const newNeutral = neutral + 1
    setNeutral(newNeutral)
    console.log("neutral:", newNeutral)
    console.log("all:", newAll)
  }

  const voteBad = () => {
    const newAll = all + 1
    setAll(newAll)
    const newBad = bad + 1
    setBad(newBad)
    console.log("bad:", newBad)
    console.log("all:", newAll)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={() => voteGood()} text="Good" />
      <Button handleClick={() => voteNeutral()} text="Neutral" />
      <Button handleClick={() => voteBad()} text="Bad" />
      <h1>Statistics</h1>
      <p><b>All: {all}</b></p>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
    </div>
  )
}

export default App