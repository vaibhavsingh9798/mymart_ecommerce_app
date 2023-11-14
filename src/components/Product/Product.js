import { Button, Col, Container, Row } from "react-bootstrap"
import './Product.css'
import products from '../../assets/products'
import { useContext } from "react"
import CartContext from "../Store/Cart-auth"

const Product = () =>{
    
    const cartCtx = useContext(CartContext)
    const handleAdd = (event,item)=>{
        event.preventDefault()
        cartCtx.addToCart(item)
       console.log('it',item)
    }
        const printProduct = ()=>{
           return ( <Container className="products" style={{ width: '60%' }}>
                <Row className="justify-content-center">
                    <h3 className="fw-bold text-center mt-4">Product</h3>
                {products.map((product,ind) =>  (
                    <Col key={ind} sm={6} md={6} lg={6}   className="text-center mt-5" >
                    <div className="product-card">
                      <h5>{product.title}</h5>
                      <img src={product.imageUrl} alt={product.title} className="img-fluid"/>
                         <Row className=" mt-4">
                        <Col> <p>Rs {product.price}</p></Col>
                        <Col><Button onClick={(event) => handleAdd(event,product)} className="w-10">Add to Cart</Button></Col>
                       </Row>
                    </div>
                    </Col>
                ))}
             </Row>
             </Container>)
        }

    return(
        <>
        {printProduct()}
        </>
    )
}

export default Product;