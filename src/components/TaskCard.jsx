import React from 'react'
import styled from 'styled-components'
import Buttons from './Buttons'
import deleteIcon from '../assets/delete.png'


const Container = styled.div``
const Card = styled.article`
  width: 100%;
  min-height: 100px;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  padding: 15px;
  margin: 15px 0;
`
const Text = styled.p`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 15px;
`
const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Tags = styled.div`
  display: flex;
`
const Delete = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    opacity: 80%;
  }
`
const Icon = styled.img`
  &:hover {
    background-color: #ebebeb;
    opacity: 80%;
  }
  width: 20px;
  opacity: 50%;
  transition: all 0.3s ease-in-out;
`

const TaskCard = ({title, tags, handleDelete, index}) => {
  console.log('title',title)

  console.log('tags',tags)
  return (
    <Container>
      <Card>
        <Text>{title}</Text>
        <Bottom>
          <Tags>
            {
              tags.map((tag, index) => (
              <Buttons key={index} name={tag} selected/>
            ))}
          </Tags>
          <Delete onClick={() => handleDelete(index)}>
            <Icon src={deleteIcon} alt=""/>
          </Delete>
        </Bottom>
      </Card>
    </Container>
  )
}

// TaskCard.propTypes = {
//   title: PropTypes.string,
//   tags: PropTypes.array,
// }

export default TaskCard