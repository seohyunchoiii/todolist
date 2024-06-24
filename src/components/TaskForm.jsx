import React, {useState} from 'react'
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

const ButtonsWrapper = styled.div`
  display: flex;
`

const Select = styled.select`
  font-size: 16px;
  font-weight: 500;
  border: 1px solid #999;
  border-radius: 5px;
  width: 120px;
  height: 40px;
  padding: 0 5px;
`

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

const TaskForm = ({setTasks}) => {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    buttons: []
  })

  const checkButton = (a) => {
    return taskData.buttons.some(item => item === a)
  }

  const selectButton = (a) => {
    if(taskData.buttons.some(item => item === a)) {
      const filterButtons = taskData.buttons.filter(item => item !== a)
      setTaskData(prev => {
        return {...prev, buttons: filterButtons}
      })
    }
    else {
      setTaskData(prev => {
        return {...prev, buttons: [...prev.buttons, a]}
      })
    }
  };

  const handleChange = (e) => {
    const {name, value} = e.target

    setTaskData((prev) => {
      return {...prev, [name]: value}
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskData);
    setTasks(prev => {
      return [...prev, taskData];
    })
  }

  return (
    <Container>
      <Header/>
        <Form onSubmit={handleSubmit}>
          <Input
            type= "text"
            name="task"
            // className = "task_input"
            placeholder = 'Enter your task'
            onChange={handleChange}
          />
          <Bottom>
            <ButtonsWrapper>
              <Buttons name="HTML" selectButton={selectButton} selected={checkButton("HTML")}/>
              <Buttons name="CSS" selectButton={selectButton} selected={checkButton("CSS")}/>
              <Buttons name="JavaScript" selectButton={selectButton} selected={checkButton("JavaScript")}/>
              <Buttons name="React" selectButton={selectButton} selected={checkButton("React")}/>
            </ButtonsWrapper>
            
            <div>
              <Select 
                name="status"
                // className='task_status'
                onChange = {handleChange}>
                <option value='todo'> To do </option>
                <option value='doing'> Doing </option>
                <option value='done'> Done </option>
              </Select>
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