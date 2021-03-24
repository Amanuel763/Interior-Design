import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Footer from './Components/Footer';
import Header from './Components/Header';
import Productpage from './Pages/Productpage';
import HomeScreen from './Screens/Home/HomeScreen';
import ProductDetails from './Pages/ProductDetails';

const App = () => {
  return (
    <Router>
      <Header />
        <main className='py-3'>
          <Container>
            <Route path='/' component={HomeScreen} exact />
            <Route path='/shop' component={Productpage} />
            <Route path='/product/:id' component={ProductDetails} exact />
          </Container>
        </main>
      <Footer />
    </Router>  
  );
}

export default App;
