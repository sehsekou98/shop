import React from 'react';
import './App.css';
import HomePage from './customer/Pages/HomePage/HomePage'; 
import Footer from './customer/components/Footer/Footer';
import Navigation from './customer/components/navigation/Navigation';
import Product from './customer/components/Product/Product'; 
import ProductDetails from './customer/components/productDetails/ProductDetails';
import Cart from './customer/components/Cart/Cart';



function App() {
  return (
    <div className="">
      <Navigation/>
     <div>
      { /* <HomePage /> */} 
       {/* <Product /> */}
       {/*<ProductDetails/>*/}
       <Cart />
     </div> 
     <Footer />
    </div>
  );
}

export default App;
