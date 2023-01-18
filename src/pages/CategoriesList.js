import NavBar from '../components/NavBar'
import TopMenu from '../components/TopMenu'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Promotions from '../components/Promotions'
import ScrollTop from '../components/ScrollTop'
import Footer from '../components/Footer'



const CategoriesList = () => {
  return (
    <div>
      <TopMenu />
      <NavBar />
      <Slider />
      <Categories />      
      <Promotions />
      <Footer />
      <ScrollTop />
    </div>
  )
}

export default CategoriesList