import {useState} from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';

const Container=styled.div`
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Registration=styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 10px;
`
const RegistrationText=styled.a`
    text-decoration: none;
    color:white;
    cursor: pointer;
    transition: all .4s ease;
    &:hover{
        text-decoration: underline;
        color: black;
    }
`
const SearchContainer=styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;    
    align-items: center;
    position: relative;
    `
const Search=styled.input`
    width:200px;    
    height:20px;
    display:${props=>props.displaySearh?'block':'none'};
    padding: 10px;
    position: absolute;
    right:8px;
    top: 25px;
    transition: all .6s ease-in-out;
`
const SearchIconContainer=styled.div`    
    cursor: pointer;    
    display: flex;
    align-items: center;
    color:white;
`

const NavBarRight = () => {
    const [displaySearh, setDisplaySearch]=useState(false)

    const handlClick=()=>{
        setDisplaySearch(!displaySearh)
    }
  return (
    <Container>
        <Registration>
            <RegistrationText>Login</RegistrationText>
            <RegistrationText>Register</RegistrationText>
        </Registration>
        <SearchContainer>
            <SearchIconContainer>
                <SearchIcon onClick={handlClick} />
            </SearchIconContainer>
            <Search displaySearh={displaySearh} placeholder='search...'></Search>
        </SearchContainer>
    </Container>
  )
}

export default NavBarRight