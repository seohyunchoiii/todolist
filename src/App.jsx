import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import TaskForm from './components/TaskForm'
import TaskColumn from './components/TaskColumn'
import todoIcon from './assets/direct-hit.png'
import doingIcon from './assets/glowing-star.png'
import doneIcon from './assets/check-mark-button.png'


const Container = styled.div`
  display: grid;
  grid-template-rows: 150px auto;
  `
const Main = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 20px 8%;
`
const Column = styled.div`
  width: 33.33%;
  margin: 20px;
`
const oldTasks = localStorage.getItem("tasks")
console.log(oldTasks)

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks)|| []);

useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);

  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex)
    setTasks(newTasks)
  }
  console.log("tasks", tasks);
  return (
    <Container>
      <TaskForm setTasks={setTasks}/>
      <Main>
        <Column><TaskColumn title="To do" handleDelete={handleDelete} icon={todoIcon} tasks={tasks} status="todo"/></Column>
        <Column><TaskColumn title="Doing" handleDelete={handleDelete} icon={doingIcon} tasks={tasks} status="doing"/></Column>
        <Column><TaskColumn title="Done" handleDelete={handleDelete} icon={doneIcon} tasks={tasks} status="done"/></Column>
      </Main>
    </Container>
  )
}

export default App