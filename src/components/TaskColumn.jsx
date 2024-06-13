import React from 'react'
import styled from 'styled-components'
import TaskCard from './TaskCard'

const Container = styled.div`
`
const Heading = styled.h2`
  display: flex;
  align-items: center;
`
const Icon = styled.img`
  width: 30px;
  margin-right: 30px;
`

const TaskColumn = ({title, icon}) => {
  return (
    <Container>
      <Heading>
        <Icon src={icon} alt=''/>{title}
      </Heading>
      <TaskCard/>
    </Container>

  )
}

export default TaskColumn