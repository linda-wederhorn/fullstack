import { useState } from 'react'

const Button = ({ handleClick, text }) =>
  (<button onClick={handleClick}>{text}</button>)

const PrintAnecdote = ({ anecdote, votes }) => (
  <>
    <p>{anecdote}</p>
    <p>has {votes} votes</p>
  </>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return (Math.floor(Math.random() * (max - min) + min)); // The maximum is exclusive and the minimum is inclusive
  }

  const [selected, setSelected] = useState(0)
  const [voted, setVote] = useState(Array(anecdotes.length).fill(0))

  const randomAnectode = () => {
    setSelected(getRandomInt(0, anecdotes.length))
  }

  const voteAnecdote = (selected) => {
    console.log("selected", selected, "anecdote", anecdotes[selected])
    const newVoted = [...voted];
    console.log()
    newVoted[selected] += 1
    setVote(newVoted)
    console.log("had", voted[selected], "votes, now", newVoted[selected], "votes")
    console.log("all votes", newVoted)
  }

  const mostVotedAnecdote = (allVotes) => {
    const maxVotes = Math.max.apply(null, allVotes)
    const maxIndex = allVotes.indexOf(maxVotes)
    return maxIndex
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <PrintAnecdote anecdote={anecdotes[selected]} votes={voted[selected]} />
      <Button handleClick={() => voteAnecdote(selected)} text="vote" />
      <Button handleClick={() => randomAnectode(selected)} text="next anecdote" />

      <h1>Anecdote with most votes</h1>
      <PrintAnecdote anecdote={anecdotes[mostVotedAnecdote(voted)]} votes={voted[mostVotedAnecdote(voted)]} />
    </div>
  )
}

export default App