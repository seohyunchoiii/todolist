import React from 'react'
import styled from 'styled-components'

const Container = styled.div``
const Button = styled.button`
  font-size: 14px;
  font-weight: 500;
  background-color: #f9f9f9;
  border: 1px solid #dfe3e6;
  border-radius: 5px;
  padding: 2px 10px;
  margin-right: 10px;
  cursor: pointer;
`

const Buttons = ({name, selectButton, selected}) => {
  const buttonStyle = {
    HTML: {backgroundColor: "#fda821"},
    CSS: {backgroundColor: "#15d4c8"},
    JavaScript: {backgroundColor: "#ffd12c"},
    React: {backgroundColor: "#4cdafc"},
    default: {backgroundColor: "#f9f9f9"},
  }
  return (
    <Container>
      <Button
        type="button"
        style={selected ? buttonStyle[name] : buttonStyle.default}
        onClick={ () => selectButton(name)}>
        {name}
      </Button>
    </Container>
  )
}

export default Buttons