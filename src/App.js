import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop"
import Cart from "./Pages/Cart"
import ShopCategory from "./Pages/ShopCategory"
import Product from "./Pages/Product.js"
import LoginSignUP from "./Pages/LoginSignup.js"
import Footer from "./Components/Footer/Footer.js";
import kid_banner from "./Assets/banner_kids.png"
import women_banner from "./Assets/banner_women.png"
import men_banner from "./Assets/banner_mens.png"

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
          <Route path='/' element ={<Shop />}/>
          <Route path='/men' element ={ <ShopCategory banner={men_banner} category="men" />} />
          <Route path='/women' element ={ < ShopCategory banner={women_banner} category="women"/>} />
          <Route path='/kids' element ={ < ShopCategory banner={kid_banner} category="kid"/>} />
          <Route path="/product" element ={<Product />}>
            <Route path=":productId" element ={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/login" element={<LoginSignUP />}/>
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
