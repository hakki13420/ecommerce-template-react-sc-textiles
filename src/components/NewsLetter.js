import styled from 'styled-components'
import Socials from './Socials'

const Container=styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 20px;
  flex: 3;
`
const Title=styled.h1`
  font-size: 1.8rem;
  font-weight: 100;
  letter-spacing: 4px;
  text-transform: uppercase;  
`
const TitleFirst=styled.span`    
    color: red;
`
const TitleSecond=styled.span`    
    
`
const Form=styled.form`
  display: flex;
  width: 100%;
  border-bottom: 2px solid teal;
`
const Input=styled.input`
  padding: 10px;
  flex: 5;
  outline: none;
  border: none;
`
const Button=styled.button`
  background-color: teal;
  flex: 1;
  border: none;
  color: white;
  padding: 0 10px;
  transition: all .4s ease;
  cursor:pointer;
  &:hover{
    background-color: coral;
    color: white;
  }
`

const NewsLetter = () => {
  return (
    <Container>
      <Title>
        <TitleFirst>news</TitleFirst>
        <TitleSecond>news</TitleSecond>
      </Title>
      <Form>
        <Input placeholder="Enter you Email..." />
        <Button>Subscribe</Button>
      </Form>
      <Socials></Socials>

    </Container>
  )
}

export default NewsLetter