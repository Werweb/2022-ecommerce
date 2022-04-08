
import './App.css';
import CheckoutCard from './components/CheckoutCard';
import CheckoutPage from './components/CheckoutPage';
import Navbar from './components/Navbar';
import Product from './components/Product'
import Products from './components/Products';
import {Switch, BrowserRouter as Router, Route} from "react-router-dom"

function App() {
  return (
    <Router>

   
    <div className="App">
      <Navbar/>
      <Switch>
        <Route path="/checkout-Page">
            <CheckoutPage/>
        </Route>
      </Switch>
      <Route path="/">
             <Products/>
        </Route>
      
      
    
    
    </div>
     </Router>
  );
}

export default App;
