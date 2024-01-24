
import { Container, Row, Col} from 'react-bootstrap';
import './App.css';
import Header from './components/Header/Header';
import Products from './components/Product/Products';
import Footer from './components/Footer/Footer';
import MartContextProvider from './components/Store/MartContextProvide';
import { Route, Routes, Navigate} from 'react-router-dom'
import Home from './components/Home/Home';
import About from './components/About/About';
import ContactUs from './components/ConatctUs/ConatctUs';
import Product from './pages/Product';
import AuthForm from './components/Auth/AuthForm';
import Profile from './components/Profile/Profile';
import AddProduct from './components/Product/AddProduct';
import { useContext , useEffect} from 'react';
import MartContext from './components/Store/mymart-auth';

function App() {
  const martCtx = useContext(MartContext)
  let isLogin = martCtx.isLogin || !!(localStorage.getItem('token'))
 
  const idealeTime = 5 * 60 * 1000;

useEffect(()=>{
  let timeOutId
    if(timeOutId)
    clearTimeout(timeOutId)
 timeOutId = setTimeout(()=>{
   localStorage.removeItem('token')
   window.location.href= '/auth'
},[idealeTime])
},[])

  return (
  <MartContextProvider>
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
            <Route exact path="/" element={<Navigate to="/auth"  />}  />
             <Route path="/home" element= {isLogin ? <Home /> : <Navigate to="/auth"   /> }/> 
              <Route path="/about" element= {isLogin ? <About /> : <Navigate to="/auth"  />}/>
                <Route  exact path="/products" element= {isLogin ? <Products/> : <Navigate to="/auth"  />} />
                 <Route exact path="/products/:productId" element= {isLogin ? <Product/> : <Navigate to="/auth"   />} /> 
                   <Route  exact path="/products/add-product" element= {isLogin ? <AddProduct /> : <Navigate to="/auth"   />} />
                  <Route path="/contact-us" element= {isLogin ? <ContactUs /> : <Navigate to="/auth"   />} />
              <Route path="/auth" element={<AuthForm />} />
                 <Route path="/profile" element={isLogin ? <Profile /> : <Navigate to="/auth"   />} />
            </Routes>
         
        </Col>
      </Row>
    </main>
    
    <footer>
      <Row >
        <Col>
          <Footer />
        </Col>
      </Row>
    </footer>
  </Container>
  </MartContextProvider>
  );
}

export default App;  

      

