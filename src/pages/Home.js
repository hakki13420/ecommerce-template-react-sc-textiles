import NavBar from '../components/NavBar'
import TopMenu from '../components/TopMenu'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Promotions from '../components/Promotions'
import Products from '../components/Products'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'



const Home = () => {
  return (
    <div>
      <TopMenu />
      <NavBar />
      <Slider />
      <Categories />
      <Products />
      <Promotions />
      <Footer />
    </div>
  )
}

export default Home