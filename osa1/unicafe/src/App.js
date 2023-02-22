import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = ({ good, neutral, bad, all }) => {
  const getAverage = () => (good - bad) / all
  const getPositives = () => good / all * 100 + " %"

  return (
    <div>
      <h1>Statistics</h1>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>All: {all}</p>
      <p>Average: {getAverage()}</p>
      <p>Positive: {getPositives()}</p>
    </div>
  )
}

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
      <Statistics good={good} neutral={neutral} bad={bad} all={all} />
    </div>
  )
}

export default App