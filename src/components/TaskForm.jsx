import React from 'react'
import styled from 'styled-components'
import Buttons from './Buttons'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #dcdcdc;
  `
const Header = styled.div`
`
const Form = styled.form`
  width: 40%;
`
const Input = styled.input`
  font-size: 20px;
  font-weight: 500;
  background: #f9f9f9;
  color: #000;
  border: 1px solid #dfe3e6;
  border-radius: 5px;
  padding: 8px 12px;
  margin-bottom: 15px;
  width: 100%;
  &::placeholder{
    color: #686868;
  }
`
const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Options =[
  {value:'todo', name:'To do'},
  {value:'doing', name: 'Doing'},
  {value:'done', name: 'Done'},
];

const Select = styled.select`
  font-size: 16px;
  font-weight: 500;
  border: 1px solid #999;
  border-radius: 5px;
  width: 120px;
  height: 40px;
  padding: 0 5px;
`

/* eslint-disable react/prop-types */
const SelectBox = (props) =>{
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <Select onChange={handleChange}>
      {props.options.map((option) => (
        <option
            key={option.value}
            value={option.value}>
          {option.name}
        </option>
      ))}
    </Select>
  );
};
const Submit = styled.button`
  font-size: 16px;
  font-weight: 500;
  background-color: #6457f9;
  color: #fff;
  border-radius: 5px;
  height: 40px;
  padding: 3px 13px;
  margin-left: 10px;
  border: none;
  cursor: pointer;
`

const TaskForm = () => {
  return (
    <Container>
      <Header/>
        <Form>
          <Input
            type= "text"
            name = "task_input"
            placeholder = 'Enter your task'
          />
          <Bottom>
            <div>
            <Buttons name="HTML"/>
            <Buttons name="CSS"/>
            <Buttons name="JavaScript"/>
            <Buttons name="React"/>
            </div>
            
            <div>
            <SelectBox
              options = {Options}
              />
            <Submit>
              + Add Task
            </Submit>
            </div>
          </Bottom>
        </Form>
      </Container>
  )
}

export default TaskForm