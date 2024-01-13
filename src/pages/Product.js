import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {Container,Row,Col} from 'react-bootstrap'
const Product = () =>{
    const [product,setProduct] = useState({title:'',image:'',price:''})
    const {productId} = useParams()
    const url = 'https://react-mymart-default-rtdb.firebaseio.com'
    const fetchProductById = async () =>{
       try{
       let response = await fetch(`${url}/products/${productId}.json`)
       let data = await response.json()
          console.log('data------',data)
         setProduct(data)
       }catch(err){
        console.error(err.message)
       }
    }

     useEffect(()=>{
        fetchProductById()
     },[])

     const printProduct = () =>{
     return (   <Container className="products" style={{ width: '100%' }}>
                <Row className="justify-content-center">
                    <h3 className="fw-bold text-center mt-4">Product</h3>
                    <Col sm={6} md={6} lg={6} className="text-center mt-5" >
                    
                      <h5>{product.title}</h5>
                      <img src={product.image} alt={product.title} style={{ width: '20rem', height: '20rem' }}/>
                         <Row className=" mt-4">
                         <Col> <p>Rs {product.price}</p></Col>
                         </Row>
                       
                         </Col>
                         </Row>
                         </Container>
     )
     }
    return(
        <>
        {printProduct()}
       
        </>
    )
}

export default Product;