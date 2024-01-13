
import { Container, Row, Col} from 'react-bootstrap';
import './App.css';
import Header from './components/Header/Header';
import Products from './components/Product/Products';
import Footer from './components/Footer/Footer';
import CartContextProvider from './components/Store/CartContextProvide';
import { Route, Routes, Navigate} from 'react-router-dom'
import Home from './components/Home/Home';
import About from './components/About/About';
import ContactUs from './components/ConatctUs/ConatctUs';
import Product from './pages/Product';

function App() {
  
  return (
  <CartContextProvider>
    <Container fluid>
    <header>
      <Row>
        <Col>
          <Header />
        
        </Col>
      </Row>
    </header>
    
    <main>
      <Row className="justify-content-center">
        <Col>
         
            <Routes>
            <Route path="/" element={<Navigate to="/products"  replace />}  />
              <Route path="/home" element= {<Home /> }/>
              <Route path="/about" element= {<About />}/>
              <Route  exact path="/products" element= {<Products/>} />
                 <Route exact path="/products/:productId" element= {<Product/>} /> 
              <Route path="/contact-us" element= {<ContactUs />} />
            </Routes>
         
        </Col>
      </Row>
    </main>
    
    <footer>
      <Row>
        <Col>
          <Footer />
        </Col>
      </Row>
    </footer>
  </Container>
  </CartContextProvider>
  );
}

export default App;  

      

