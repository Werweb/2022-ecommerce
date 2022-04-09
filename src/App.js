
import './App.css';
import CheckoutPage from './components/CheckoutPage';
import Navbar from './components/Navbar';
import Products from './components/Products';
import {Switch, BrowserRouter as Router, Route} from "react-router-dom"
import Biography from './constructor/Biography';
import Signin from './components/Signin'
import SignUp from './components/SignUp';

function App() {
  return (
    <Router>
      <div className='app'>
        <Navbar />
        <Switch>
          <Route path='/signup'>
            <SignUp />
          </Route>
          <Route path='/signin'>
            <Signin />
          </Route>
          <Route path='/checkout-page'>
            <CheckoutPage />
          </Route>
          <Route path='/bio'>
            <Biography />
          </Route>
          {/* <Route path='/checkout'>
            <Checkout />
          </Route> */}
          <Route path='/'>
            <Products />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
