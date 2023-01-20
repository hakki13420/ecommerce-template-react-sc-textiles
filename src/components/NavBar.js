import {useState} from 'react'
import styled,{keyframes} from 'styled-components'
import { xs, sm, md, lg } from '../responsive'
import Logo from './Logo'
import NavBarRight from './NavBarRight'
import Navigation from './Navigation'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseIcon from '@mui/icons-material/Close';


const Container=styled.div`
  height: 50px;
  background-color: lightcoral;
  display: flex;
  align-items: center;
  justify-content: space-between; 
  
  ${xs({
    height: 'auto',    
  })};
  ${sm({
    height: 'auto',
  })}
`

const Left=styled.div`
  flex:1;
  display: flex;
  ${xs({
    justifyContent:'flex-start',
    width: '300px',
  })};
  ${sm({
    justifyContent:'flex-start',
    width: '300px',

  })}
`

const Right=styled.div`
  flex:1;
  ${xs({
    flex: '3',
    flexDirection: 'column',
  })};
  ${sm({
    flex: '3',
    flexDirection: 'column',

  })}
`

const Center=styled.div`
  flex:3;
  ${xs({
    flexDisplay:'column',
  })};
  ${sm({
    flexDisplay:'column',
  })}
`
const IconMenu=styled.div`
  height: 40px;
  width: 40px;
  display: none;
  display: flex;
  color: white;
  align-items: center;
  font-size: 1.5rem;
  margin:0 40px;
  ${xs({
    display: 'flex',
  })};
  ${sm({
    display: 'flex',
  })};
  ${md({
    display: 'flex',
  })};
  ${lg({
    display: 'none',
  })}
`
const AnimationHeight=keyframes`
  0% { 
    //height: 0px;
    display:none;
    opacity: 0;
   } 
   
 100% {    
   display:flex;
   opacity: 1;
  }
`

const Menu=styled.div`
  flex:3;
  display: flex;
  align-items: center;
  justify-content: space-around; 
  flex-direction: column;
  position: absolute;
  top: 80px;
  right: 40px;
  width: 200px;  
  height: auto;
  background-color: #ec2a1e8c;
  z-index: 2;
  margin: 0 20px;  
  animation-name: ${AnimationHeight};
  animation-duration: .5s;
  ${xs({
    width: '120px',    
    fontSize:'0.6rem',
  })};
  ${sm({
    width: '120px',    
    fontSize:'0.6rem',
  })};
  ${md({
    top: '90px',        
  })};
  ${lg({
    display:'none',
  })}
`
const MenuNav=styled.div`
  flex:3;
  display: flex;
  align-items: center;
  justify-content: space-around; 
  margin: 0 20px;
  ${xs({
    display:'none',
  })};
  ${sm({    
    display:'none',
  })};
  ${md({
    display:'none',
  })};
  ${lg({
    display:'flex'
  })}
`

const NavBar = () => {
  const [displayMenu, setDisplayMenu]=useState(false)

  return (
    <Container>
      <Left>
        <Logo />
      </Left>      
      <MenuNav>
        <Center>
          <Navigation />
        </Center>
        <Right>
          <NavBarRight/>
        </Right>
      </MenuNav>
      <IconMenu>
        {!displayMenu && <MenuOutlinedIcon onClick={()=>setDisplayMenu(!displayMenu) }/>}
        {displayMenu && <CloseIcon onClick={()=>setDisplayMenu(!displayMenu) }/>}
      </IconMenu>
      {displayMenu && <Menu dispaly={displayMenu} >
        <Center>
          <Navigation />
        </Center>
        <Right>
          <NavBarRight/>
        </Right>
      </Menu>}
    </Container>
  )
}

export default NavBar