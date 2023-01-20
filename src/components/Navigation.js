import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {xs, sm, md} from '../responsive'

const Container=styled.div`
  padding: 10px;
  color:white  
`
const Menu=styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  align-items: center;  
  gap: 10px;
  ${xs({
    flexDirection:'column',
  })};
  ${sm({
    flexDirection:'column',
  })};
  ${md({
    flexDirection:'column',
  })};
`
const MenuItem=styled.li`
    
`

const Navigation = () => {
  return (
    <Container>
      <Menu>
        <MenuItem>          
          <Link to='/'>
            Home
          </Link>          
        </MenuItem>
        <MenuItem>          
          <Link to='/categories'>
            Categories
          </Link>        
        </MenuItem>
        <MenuItem>          
          <Link to='/products'>
            Products
          </Link>        
        </MenuItem>
        <MenuItem>          
          <Link to='/about'>
            About
          </Link>          
        </MenuItem>
        <MenuItem>          
          <Link to='/contact'>
            Contact
          </Link>          
        </MenuItem>
      </Menu>
    </Container>
  )
}

export default Navigation