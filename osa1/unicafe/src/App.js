import { useState } from 'react'

const Display = props => <div>{props.value}</div>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const vote = () => {
    const newAll = all + 1
    setAll(newAll)
    console.log("all:", newAll)
  }

  const getAverage = () => (good - bad) / all

  const getPositives = () => good / all * 100 + " %"

  const voteGood = () => {
    const newGood = good + 1
    setGood(newGood)
    console.log("good:", newGood)
    vote()
  }

  const voteNeutral = () => {
    const newNeutral = neutral + 1
    setNeutral(newNeutral)
    console.log("neutral:", newNeutral)
    vote()
  }

  const voteBad = () => {
    const newBad = bad + 1
    setBad(newBad)
    console.log("bad:", newBad)
    vote()
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={() => voteGood()} text="Good" />
      <Button handleClick={() => voteNeutral()} text="Neutral" />
      <Button handleClick={() => voteBad()} text="Bad" />
      <h1>Statistics</h1>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p><b>All: {all}</b></p>
      <p><b>Average: {getAverage()}</b></p>
      <p><b>Positive: {getPositives()}</b></p>
    </div>
  )
}

export default App