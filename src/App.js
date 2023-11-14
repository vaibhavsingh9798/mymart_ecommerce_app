
import { Container, Row, Col} from 'react-bootstrap';
import './App.css';
import Header from './components/Header/Header';
import Product from './components/Product/Product';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import CartContextProvider from './components/Store/CartContextProvide';


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
           <Product />
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

      
