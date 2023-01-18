import styled from 'styled-components'
import { xs, sm } from '../responsive'
import Logo from './Logo'
import NavBarRight from './NavBarRight'
import Navigation from './Navigation'

const Container=styled.div`
  height: 80px;
  background-color: lightcoral;
  display: flex;
  align-items: center;
  justify-content: space-between; 
  
  ${xs({
    height: '50px',
  })};
  ${sm({
    height: '50px',
  })}
`

const Left=styled.div`
  flex:1;
`

const Right=styled.div`
  flex:1;
  ${xs({
    flex: '3',
  })};
  ${sm({
    flex: '3',
  })}
`

const Center=styled.div`
  flex:3;
  ${xs({
    display:'none',
  })};
  ${sm({
    display:'none',
  })}
`

const NavBar = () => {
  return (
    <Container>
      <Left>
        <Logo />
      </Left>
      <Center>
        <Navigation />
      </Center>
      <Right>
        <NavBarRight/>
      </Right>
    </Container>
  )
}

export default NavBar