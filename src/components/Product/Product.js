import { Button, Col, Container, Row } from "react-bootstrap"
import './Product.css'
import { useContext, useState, useEffect, useCallback } from "react"
import CartContext from "../Store/Cart-auth"

const Product = () =>{
  const [products,setProducts] = useState([])
  const [loading,setLoading] = useState(true)
  const [error,setError] = useState(null)

const fetchProduct= useCallback(async () => {
    try{
  let response = await  fetch('https://fakestoreapi.com/produc')
   let data    = await response.json()
     let transformedItems = data.map((product) => {
         return {
             id: product.id,
             title: product.title.split(' ').splice(0,4).join(' '),
             price:product.price ,
             imageUrl: product.image
         }
     })
     setProducts(transformedItems)
    }catch(err){
      setError(err.message)
    }finally{
      setLoading(false);
    }
   setLoading(false)
 },[])
      useEffect(()=>{
          fetchProduct()
      },[fetchProduct])
 
    const cartCtx = useContext(CartContext)
    const handleAdd = (event,item)=>{
        event.preventDefault()
        cartCtx.addToCart(item)
       
    }
        const printProduct = ()=>{
           return ( <Container className="products" style={{ width: '60%' }}>
                <Row className="justify-content-center">
                    <h3 className="fw-bold text-center mt-4">Product</h3>
                {products.map((product,ind) =>  (
                    <Col key={ind} sm={6} md={6} lg={6}   className="text-center mt-5" >
                    <div className="product-card">
                      <h5>{product.title}</h5>
                      <img src={product.imageUrl} alt={product.title} style={{ width: '100px', height: '100px', objectFit: 'cover' }}/>
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
     
        {!loading && products.length > 0 && printProduct()}
        {!loading && error &&<h5>{error}</h5>}
          {loading && <h5>Loading.....</h5>}
       
        </>
    )
}

export default Product;