import React from 'react'
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

const App = () => {
  return (
    <Container>
      <TaskForm/>
      <Main>
        <Column><TaskColumn title="To do" icon={todoIcon}/></Column>
        <Column><TaskColumn title="Doing" icon={doingIcon}/></Column>
        <Column><TaskColumn title="Done" icon={doneIcon}/></Column>
      </Main>
    </Container>
  )
}

export default App