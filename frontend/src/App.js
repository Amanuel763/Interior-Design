import React from 'react';
import { Container } from 'react-bootstrap'
import Footer from './Components/Footer';
import Header from './Components/Header';
import Productpage from './Pages/Productpage';

const App = () => {
  return (
    <>
      <Header />
        <main>
          <Container>
            <Productpage />
          </Container>
        </main>
      <Footer />
    </>  
  );
}

export default App;
