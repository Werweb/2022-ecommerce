
import './App.css';
import CheckoutPage from './components/CheckoutPage';
import Navbar from './components/Navbar';
import Products from './components/Products';
import {Switch, BrowserRouter as Router, Route} from "react-router-dom"
import Biography from './constructor/Biography';

function App() {
  return (
    <Router>

   
    <div className="App">
      <Navbar/>
      <Switch>
        <Route path="/checkout-Page">
            <CheckoutPage/>
        </Route>
         <Route path="/">
             <Products/>
        </Route>
        <Route path="/bio" element={<Biography/>}>
          {/* <Biography/>  */}
        </Route>
      </Switch>
     
      
      
    
    
    </div>
     </Router>
  );
}

export default App;
