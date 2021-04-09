import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Footer from './Components/Footer';
import Header from './Components/Header';
import Productpage from './Pages/Productpage';
import HomeScreen from './Screens/Home/HomeScreen';
import ProductDetails from './Pages/ProductDetails';
import AboutPage from './Pages/AboutPage';
import Contact from './Pages/Contact';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';

const App = () => {
  return (
    <Router>
      <Header />
          <Container>
            <Route path='/signin' component={LoginPage}  />
            <Route path='/register' component={RegisterPage}  />
            <Route path='/shop' component={Productpage} />
            <Route path='/product/:id' component={ProductDetails} />
            <Route path='/about' component={AboutPage} />
            <Route path='/contact' component={Contact} />
            <Route path='/' component={HomeScreen} exact />

          </Container>
      <Footer />
    </Router>  
  );
}

export default App;
