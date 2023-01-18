import styled from 'styled-components'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import { popularProducts } from '../data'
import Circle from './Circle'
import { xs, sm } from '../responsive';

const Container= styled.div`
    display: flex;
    justify-content: center;    
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    margin: 20px 0;
    padding: 10px;
`

const ProductContainer=styled.div`
  width: 250px;
  height: 280px;
  position: relative;
  border: 1px solid gray;
  border-radius: 4px;
  background-color:lightsalmon;
  padding: 10px;    
  ${xs({
    width: '80%',
    height: '280px',
  })};
  ${sm({
    width: '47%',
    height: '320px',    
  })}
`
const ImageContainer=styled.div`
  z-index: 2;
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 20px;
  ${sm({
    padding: '5px',    
  })}
`
const Image=styled.img`  
  width: 95%;
  height: 95%;
  object-fit: cover;          
  ${xs({
    objectFit: 'contain',
    width: '80%',    
  })};
  ${sm({
    height: '90%',    
  })}
`
const IconsContainer=styled.div`
    opacity:0;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color:rgba(4,5,7,0.2); 
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    transition:all .4s ease;        
    z-index: 3;
    cursor: pointer;
    &:hover{
        opacity: 1;
    }
`

const IconItem=styled.div`
font-size: 1.2rem;
height: 35px;
width: 35px;
cursor:pointer;
transition:all .3s ease;
border-radius: 50%;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
color:black;
&:hover{
    transform: scale(1.06);            
    color: red;
}
`

const Product = ({product}) => {
  return (
    <Container>
      <ProductContainer>
        <ImageContainer>
          <Image src={product.img} />                  
        </ImageContainer>
        <IconsContainer>
          <IconItem><AddShoppingCartIcon /></IconItem>
          <IconItem><DescriptionOutlinedIcon /></IconItem>
          <IconItem><ThumbUpOutlinedIcon /></IconItem>                
        </IconsContainer>
      </ProductContainer>            
    </Container>
  )
}

export default Product