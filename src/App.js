import React, { useEffect } from 'react'
import './App.css';
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './Login'
import { auth} from 'firebase'
import { useStateValue } from './StateProvider'
import Payment from './Payment'
// react-router-dom ver 5.8.0, not the latest one as it doesnt support Switch instead it has routes
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'
import Orders from './Orders';

const promise =loadStripe('pk_test_51KptYXSCoJFuuUPNIwEFNNseTnqUg95bj4JmEhkpCXaC498eMBqZW6itPDFrSgkPyspaMntEznnYF40Ow9G26hHz00BqKNzADi');

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...
// auth()is required here
    auth().onAuthStateChanged(authUser => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/orders'>
            <Header />
            <Orders />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>
          <Route path='/payment'>
            {/* high order function */}
            <Header />
            <Elements stripe={promise}>
            <Payment />
            </Elements>
          </Route>
          <Route path='/'>
          <Header />``
            <Home />
          </Route>
        </Switch>
      </div>
    </Router >

  );
}

export default App;
