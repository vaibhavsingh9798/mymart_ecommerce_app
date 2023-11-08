
import { Container, Row, Col} from 'react-bootstrap';
import './App.css';
import Header from './components/Header/Header';
import Product from './components/Product/Product';
import Footer from './components/Footer/Footer';


function App() {
  return (
  
    <Container fluid>
    <header>
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
    </header>
    
    <main>
      <Row className="justify-content-md-center">
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
  );
}

export default App;  

      
