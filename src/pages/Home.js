import NavBar from '../components/NavBar'
import TopMenu from '../components/TopMenu'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Promotions from '../components/Promotions'
import Products from '../components/Products'
import ScrollTop from '../components/ScrollTop'
import Footer from '../components/Footer'
import Separator from '../components/Separator'



const Home = () => {
  return (
    <div>
      <TopMenu />
      <NavBar />
      <Slider />
      <Separator title={'Categories'}/>
      <Categories />
      <Separator title={'Products'}/>
      <Products />
      <Promotions />
      <Footer />
      <ScrollTop />
    </div>
  )
}

export default Home