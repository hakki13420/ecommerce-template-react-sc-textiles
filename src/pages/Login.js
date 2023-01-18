import styled from 'styled-components'
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import {xs} from '../responsive'

const Container=styled.div`  
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;  
  background-color: teal;
`

const Wrapper=styled.div`
  width: 30%;
  height: auto;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid teal;
  border-radius: 10px;
  background-color: white;
  ${xs({
    width:'80%',
  })}
`
const Form=styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap:15px;
  margin: 20px 0 0;
`
const Title=styled.h1`
  width: 100%;
  text-align: center;
  font-size: 2rem;
  font-weight: 300;
  letter-spacing: 2px;
  margin-bottom: 30px;
  border-bottom: 1px solid teal;
  padding: 10px;
`
const InputWrapper=styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap:20px;
  ${xs({
    flexDirection:'column'
  })}
`

const InputContainer=styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  width: 48%;  
`

const IconContainer=styled.div`
  padding: 4px;
  border: 1px solid teal;
  font-size: 12px;
  border-radius: 0 10px 10px 0;
  background-color: teal;
  color: white
`
const Input=styled.input`
  padding: 10px;
  border:none;
  border-bottom: 1px solid teal;
  outline: none;
`
const Button=styled.button`
  background-color: teal;
  border: 1px solid teal;
  color: white;  
  margin-top: 30px;
  border-radius: 4px;
  padding: 10px 30px;
  cursor: pointer;
  transition: all .2s ease-in;
  &:hover{
    transform: scale(0.96);    
  }
`

const Login = () => {
  return (
    <Container>
    <Wrapper>
    <Form>
    <Title>Login space</Title>
      <InputWrapper>              
        <InputContainer>          
          <Input type="email" placeholder='email...'/>
          <IconContainer><AlternateEmailOutlinedIcon /></IconContainer>
        </InputContainer>
        <InputContainer>          
          <Input type="password" placeholder='password...'/>
          <IconContainer><KeyOutlinedIcon /></IconContainer>
        </InputContainer>        
      </InputWrapper>      
      <Button>Login</Button>      
      </Form>
    </Wrapper>
    </Container>
  )
}

export default Login