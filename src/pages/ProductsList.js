import styled from 'styled-components'
import NavBar from '../components/NavBar'
import TopMenu from '../components/TopMenu'
import Promotions from '../components/Promotions'
import Products from '../components/Products'
import ScrollTop from '../components/ScrollTop'
import Footer from '../components/Footer'


const Container=styled.div`
  padding: 20px 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap:20px;
`
const FilterContainer=styled.div`
  display: flex;
  flex-direction: column;  
  width: 80%;
`
const FilterTitle=styled.h1`
  font-size: 1rem;
  text-align: left;
  margin: 5px 0;
`
const FilterSelect=styled.select`
  width: 80%;
  padding: 5px;
  cursor: pointer;
`
const FilterOption=styled.option`

`
const ProductsList = () => {
  return (
    <div>
      <TopMenu />
      <NavBar />

      <Container>
        
        <FilterContainer>
          <FilterTitle>Category</FilterTitle>
          <FilterSelect>
            <FilterOption disabled select>select...</FilterOption>
            <FilterOption>Men</FilterOption>
            <FilterOption>Women</FilterOption>
            <FilterOption>Boys</FilterOption>
            <FilterOption>Girls</FilterOption>
          </FilterSelect>
        </FilterContainer>

        <FilterContainer>
          <FilterTitle>Color</FilterTitle>
          <FilterSelect>
            <FilterOption disabled select>select...</FilterOption>
            <FilterOption>Blac</FilterOption>
            <FilterOption>White</FilterOption>
            <FilterOption>Green</FilterOption>
            <FilterOption>red</FilterOption>
            <FilterOption>Yellow</FilterOption>
            <FilterOption>Blue</FilterOption>
          </FilterSelect>
        </FilterContainer>

        <FilterContainer>
          <FilterTitle>Size</FilterTitle>
          <FilterSelect>
            <FilterOption disabled select>select...</FilterOption>
            <FilterOption>S</FilterOption>
            <FilterOption>M</FilterOption>
            <FilterOption>L</FilterOption>
            <FilterOption>XL</FilterOption>
          </FilterSelect>
        </FilterContainer>

        <FilterContainer>
          <FilterTitle>Sort</FilterTitle>
          <FilterSelect>
            <FilterOption>Newest</FilterOption>
            <FilterOption>Price ASC</FilterOption>
            <FilterOption>Price DESC</FilterOption>
          </FilterSelect>
        </FilterContainer>

      </Container>           

      <Products />
      <Promotions />
      <Footer />
      <ScrollTop />
    </div>
  )
}

export default ProductsList