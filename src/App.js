import './App.css';
import HomePage from './customer/Pages/HomePage/HomePage';
import Footer from './customer/components/Footer/Footer';
import Navigation from './customer/components/navigation/Navigation';
import Product from './customer/components/Product/product';



function App() {
  return (
    <div className="">
      <Navigation/>
     <div>
      <HomePage /> 
       <Product />
     </div> 
     <Footer />
    </div>
  );
}

export default App;
