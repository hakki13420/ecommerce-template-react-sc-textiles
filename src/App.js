import Home from './pages/Home';
import Login from './pages/Login'
import Register from './pages/Register'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import FandF404 from './pages/FandF404';
import CategoriesList from './pages/CategoriesList';
import ProductsList from './pages/ProductsList';
import CartPage from './pages/CartPage';
import Test from './pages/Test';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/test" element={<Test />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<CategoriesList />} />
          <Route path="/products" element={<ProductsList />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<FandF404 />} />
        </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;
