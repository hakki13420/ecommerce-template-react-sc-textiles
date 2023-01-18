import NavBar from '../components/NavBar'
import TopMenu from '../components/TopMenu'
import Promotions from '../components/Promotions'
import ScrollTop from '../components/ScrollTop'
import Footer from '../components/Footer'
import Cart from '../components/Cart'


const CartPage = () => {
  return (
    <div>
      <TopMenu />
      <NavBar />
      <Cart />      
      <Promotions />
      <Footer />
      <ScrollTop />
    </div>
  )
}

export default CartPage