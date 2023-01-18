import styled from 'styled-components'
import {xs, sm} from '../responsive'

const Container=styled.div`
    padding: 10px;
`
const LogoText=styled.h1`    
  cursor: pointer;    
  ${xs({
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
  })};
  ${sm({
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
  })}
`
const FirstPart=styled.span`
  font-size: 32px;
  color: red;
  border-radius: 50%;
  background-color: white;  
  font-weight: 600;
  padding: 7px 2px;
  ${xs({
    fontSize:'.8rem',
    fontWeight: '200',
    padding: '2px',
    width:'30px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  })};
  ${sm({
    fontSize:'.9rem',
    fontWeight: '200',
    padding: '3px',
    width:'40px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  })};
`
const SecondPart=styled.span`
  font-size: 18px;
  color: white;  
  letter-spacing: 3px;
  margin-left: 10px;
  font-weight: 400;
  
  ${xs({
    fontSize:'.7rem',
    letterSpacing: '2px',
    marginLeft: '0',
    fontWeight: '200',
  })};  
  ${sm({
    fontSize:'.8rem',
    letterSpacing: '3px',
    marginLeft: '0',
    fontWeight: '200',
  })}
`

const Logo = () => {
  return (
    <Container>
        <LogoText>
          <FirstPart>New</FirstPart>
          <SecondPart>Textiles</SecondPart>            
        </LogoText>
    </Container>
  )
}

export default Logo