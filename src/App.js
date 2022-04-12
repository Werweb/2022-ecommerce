
import './App.css';
import CheckoutPage from './components/CheckoutPage';
import Navbar from './components/Navbar';
import Products from './components/Products';
import {Switch, BrowserRouter as Router, Route} from "react-router-dom"
import Biography from './constructor/Biography';
import Signin from './components/Signin'
import SignUp from './components/SignUp';
import {useEffect} from 'react';
import {auth} from './components/FirebaseAdmin';
import {actionTypes} from "./reducer"
import {useStateValue} from "./StateProvider";/* 88 */
import Checkout from './components/checkoutForm/Checkout';

function App() {/* 86 */
  const [{user},dispatch] =useStateValue();/* 89 */
  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{/* 87 */
      console.log(authUser)
      if(authUser){
        dispatch({ /* 88 */
          type:actionTypes.SET_USER,
          user:authUser,
        })
      }
    })
  },[])
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
          <Route path='/checkout'>{/* 101 */}
            <Checkout/>
          </Route>
          <Route path='/bio'>
            <Biography />
          </Route>
    
          <Route path='/'>
            <Products />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
