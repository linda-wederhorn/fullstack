const Header = ({ name }) => (
  <h2>{name}</h2>
)

const Part = ({ name, exercises }) => (
  <p>{name} {exercises}</p>
)

const Content = ({ parts }) => {
  return (
    parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises} />)
  )
}

const Total = ({ parts }) => {
  const total = parts.reduce((total, part) => total += part.exercises, 0)
  return (<p><strong>Total of exercises {total}</strong></p>)
}

const Course = ({ course }) => {
  return (
    <>
      <h1>Web development curriculum</h1>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  )
}

export default Course