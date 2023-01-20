import {useState} from 'react'
import styled from 'styled-components'
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import SearchIcon from '@mui/icons-material/Search';
import CartIcon from './CartIcon'


import Socials from './Socials'
import {xs, sm, md, lg} from '../responsive'


const Container=styled.div`    
  height: 35px;
  padding: 15px 20px;
  background-color: rgba(0,0,0,0.7);
  color:white;
  font-size:.7rem ;
  display: flex;
  align-items: center;
  justify-content: space-around;

  ${xs({    
    justifyContent: 'space-between',
    gap:'10px',
    fontSize:'.5rem',
  })};
  ${sm({
    ustifyContent: 'space-between',
    gap:'10px',
  })};  
  ${md({    
    gap:'10px',
    padding:'15px 10px',

  })}
`

const TopMenuItemContainer=styled.div`
  flex:1;
  font-size:12px;
  display: flex;
  gap: 10px;
  align-items: center;
  ${xs({
    //justifyContent:'center'
    display:'none',
  })};
  ${sm({
    justifyContent:'center',
    display:'none',
  })};
  ${md({
    justifyContent:'center'
  })}
`
const Icon=styled.div`  
  cursor: pointer;
  transition: all .4s ease;
  &:hover{
    color: coral;
  }
`
const Title=styled.div`  
  ${md({    
    flex:'1',
  })}  
`
const SearchContainer=styled.div`
  flex:1;
  display: flex;
  justify-content: flex-end;    
  align-items: center;
  position: relative;
  ${xs({
    display:'none',
  })};
  ${sm({
    display:'none',
  })}
`
const Search=styled.input`
    width:200px;    
    height:20px;
    display:${props=>props.displaySearh?'block':'none'};
    padding: 10px;
    position: absolute;
    right:8px;
    top: 30px;
    transition: all .6s ease-in-out;
    ${xs({
    display:'none',
    })};
    ${sm({
      display:'none',
    })}
`
const SearchIconContainer=styled.div`    
    cursor: pointer;    
    display: flex;
    align-items: center;
    color:white;
    transition: all .4s ease;
    &:hover{
      color: coral;
    }
`
const CartContainer=styled.div`    
  cursor: pointer;    
  display: flex;
  align-items: center;
  color:white;
  ${lg({
    display:'none'
  })}
`
const TopMenu = () => {
  const [displaySearh, setDisplaySearch]=useState(false)

  const handlClick=()=>{
      setDisplaySearch(!displaySearh)
  }
  return (
    <Container>
      <TopMenuItemContainer>
        <Icon><PhoneIcon/></Icon>
        <Title>555.555.555 - 666.666.666</Title>        
      </TopMenuItemContainer>
      <TopMenuItemContainer>
        <Icon><MailIcon/></Icon>
        <Title>newTextiles@newtextile.com</Title>
      </TopMenuItemContainer>
      <Socials />              
      <TopMenuItemContainer>
        <SearchContainer>
          <SearchIconContainer>
            <SearchIcon onClick={handlClick} />
          </SearchIconContainer>
          <Search displaySearh={displaySearh} placeholder='search...'></Search>
        </SearchContainer>
      </TopMenuItemContainer>
      <CartContainer>
        <CartIcon></CartIcon>
      </CartContainer>
    </Container>
  )
}

export default TopMenu