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


const TaskColumn = ({title, icon, tasks, status, handleDelete}) => {
  // console.log('title',title)
  return (
    <Container>
      <Heading>
        <Icon src={icon} alt=''/>{title}
      </Heading>
      {
        tasks.map((task, index) => {

          return (
            task.status === status && (
              <TaskCard
                key={index}
                title={task.task}
                tags={task.buttons}
                handleDelete={handleDelete}
                index={index}
                />)
          )
        }
      )}
      {/* <TaskCard/> */}
    </Container>

  )
}

// TaskColumn.propTypes = {
//   title: PropTypes.string,
//   tasks: PropTypes.array,
//   status: PropTypes.string,
// };

export default TaskColumn