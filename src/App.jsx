import React from 'react'
import styled from 'styled-components'
import TaskForm from './components/TaskForm'

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
  background-color: tomato;
  margin: 20px;
`

const App = () => {
  return (
    <Container>
      <TaskForm/>
      <Main>
        <Column>Section 1</Column>
        <Column>Section 2</Column>
        <Column>Section 3</Column>
      </Main>
    </Container>
  )
}

export default App