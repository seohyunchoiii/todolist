import React from 'react'
import styled from 'styled-components'

const Container = styled.div``
const Header = styled.div``
const Form = styled.form``
const Input = styled.input``
const Bottom = styled.div``
const Button = styled.button``
const Options =[
  {value:'todo', name:'To do'},
  {value:'doing', name: 'Doing'},
  {value:'done', name: 'Done'}
];
const SelectBox = (props) =>{
  return (
    <select>
      {props.options.map((option) => (
        <option
            key={option.value}
            value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  )
}
const Submit = styled.button``

const TaskForm = () => {
  return (
    <Container>
      <Header>Header Section</Header>
        <Form>
          <Input
            type= "text"
            name = "task_input"
            placeholder = 'Enter your task'
          />
          <Bottom>
            <Button>HTML</Button>
            <Button>CSS</Button>
            <Button>Javascript</Button>
            <Button>React</Button>

            <SelectBox
              options = {Options}
              />
            <Submit>
              + Add Task
            </Submit>
          </Bottom>
        </Form>
      </Container>
  )
}

export default TaskForm