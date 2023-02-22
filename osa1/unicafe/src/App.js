import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const Statistics = ({ good, neutral, bad, all }) => {
  const average = (good - bad) / all
  const positives = good / all * 100 + " %"

  if (all <= 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  } else {
    return (
      <div>
        <h1>Statistics</h1>
        <table>
          <tbody>
            <StatisticLine text="Good" value={good} />
            <StatisticLine text="Neutral" value={neutral} />
            <StatisticLine text="Bad" value={bad} />
            <StatisticLine text="All" value={all} />
            <StatisticLine text="Average" value={average} />
            <StatisticLine text="Positives" value={positives} />
          </tbody>
        </table>
      </div>
    )
  }
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