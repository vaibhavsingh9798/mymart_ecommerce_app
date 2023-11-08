import { Button, Col, Container, Row } from "react-bootstrap"
import './Product.css'
const Product = () =>{
    const products = [
        {
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        },
        {
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        },
        {
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        },
        {
        title: 'Blue Color',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        }
        ]

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
                        <Col><Button className="w-10">Add to Cart</Button></Col>
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