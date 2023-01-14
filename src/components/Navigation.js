import styled from 'styled-components'

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
`
const MenuItem=styled.li`
    
`
const MenuItemLink=styled.a`
    padding: 5px 10px;    
    text-decoration: none;
    font-size: 1.1rem;
    cursor: pointer;
    transition: all .4s ease-in-out;
    &:hover{
        text-decoration: underline;
        color: black;
    }
`
const Navigation = () => {
  return (
    <Container>
        <Menu>
            <MenuItem>
                <MenuItemLink>
                    Home
                </MenuItemLink>
            </MenuItem>
            <MenuItem>
                <MenuItemLink>
                    Categories
                </MenuItemLink>
            </MenuItem>
            <MenuItem>
                <MenuItemLink>
                    Products
                </MenuItemLink>
            </MenuItem>
            <MenuItem>
                <MenuItemLink>
                    About
                </MenuItemLink>
            </MenuItem>
            <MenuItem>
                <MenuItemLink>
                    Contact
                </MenuItemLink>
            </MenuItem>
        </Menu>
    </Container>
  )
}

export default Navigation