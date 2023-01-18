import styled from 'styled-components'
import { xs } from '../responsive'

const Container=styled.div`
    height: 200px;
    position: relative;
`

const Image=styled.img`  
  width:100%;  
  height:100%;
  object-fit:cover;
`

const Cover=styled.div`
  opacity: .6;
  background-color: rgb(0, 0, 0);
  color: white;
  width:100%;  
  height:100%;
  top: 0;
  left: 0;
  position:absolute;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`
const Title=styled.h1`  
  font-size: 1.3rem;
  text-align: center;
`
const Desc=styled.p`  
  font-size: 1.1rem;
`
const Button=styled.button`  
  background-color: transparent;
  border: 2px solid white;
  color: white;
  font-weight: 600;
  padding: 10px 20px;
  cursor: pointer;
  width: 20%;
  transition: all .4s ease-in-out;
  &:hover{
    background-color: white;    
    color:red;
    border: 1px solid red;    
  };
  ${xs({
    width: '50%',    
  })}

`

const Promotions = () => {
  return (
    <Container>
      <Cover>
        <Title>PROMOTION SELLS 30%</Title>
        <Desc>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, minus.
        </Desc>
        <Button>Show</Button>
      </Cover>
      <Image src="https://images.unsplash.com/photo-1537243239547-99d2f52999a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw5OTk5NzUxfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
    </Container>
  )
}

export default Promotions