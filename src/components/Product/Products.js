import { Button, Col, Container, Row } from "react-bootstrap"
import './Products.css'
import { useContext, useState, useEffect, useCallback } from "react"
import MartContext from "../Store/mymart-auth"
import { NavLink } from "react-router-dom"

const Products = () =>{
  const [products,setProducts] = useState([])
  const [loading,setLoading] = useState(true)
  const [error,setError] = useState(null)

  let URL = 'https://react-mymart-default-rtdb.firebaseio.com'

 
  let email = localStorage.getItem('email') 
  email = email.replace('@','').replace('.','')
  
 
const fetchProduct = useCallback(async () => {
    try{
  let response = await  fetch(`${URL}/products.json`)
   let data    = await response.json()
   if(!data) throw new Error('Data Not Found !');
    let items = []
    for(let key in data){
      let item = {
        id: key,
        title: data[key].title,
        price: parseInt( data[key].price ),
        image: data[key].image
      }
       items.push(item)
    }
    setProducts(items)
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
 
    const cartCtx = useContext(MartContext)

    const handleAddToCart = async (event,item) =>{
        event.preventDefault()
        cartCtx.addToCart(item)
    }

    const handleDelete = async (event,item) =>{
      event.preventDefault()
       const itemId = item.id
       const itemTitle = item.title; 
      try{

   let response =  await  fetch(`${URL}/products/${itemId}.json`,{
        method:'DELETE'
      })
      if(response.ok){
        let response = await fetch(`${URL}/${email}.json`)
        let data = await response.json()
       
         let selectedItem = []
         for(let key in data){
           if(data[key].title === itemTitle)
           selectedItem.push(key)
         }
          selectedItem.map(async (id) => {
            await fetch(`${URL}/${email}/${id}.json`,{
              method:'DELETE'
            })
           })
    
      fetchProduct()
  }
    }catch(err){
      setError(err.message)
    }
    }

        const printProduct = ()=>{
           return ( <Container className="products" style={{ width: '80%' }}>
                <Row className="justify-content-center">
                    <h3 className="fw-bold text-center mt-4">Product</h3>
                {products.map((product,ind) =>  (
                    <Col key={ind} sm={6} md={6} lg={6}   className="text-center mt-5" >
                    {/* <div className="product-card"> */}
                    <NavLink to={`/products/${product.id}`}>
                      <h5>{product.title}</h5>
                      <img src={product.image} alt={product.title} style={{ width: '100px', height: '100px' }}/>
                      </NavLink>
                         <Row className=" mt-4">
                        <Col> <p>Rs {product.price}</p></Col>
                        <Col><Button onClick={(event) => handleAddToCart(event,product)} className="w-5">Add to Cart</Button></Col>
                        <Col><Button onClick={(event) => handleDelete(event,product)} className="w-5" variant="danger">Delete</Button></Col>
                       </Row>
                      
                    </Col>
                   
                ))}
                       
             </Row>
             <Row >
             <NavLink to="/products/add-product" className='addProduct'>
                   <h4 className="mt-5">   Add More Product </h4> 
                        </NavLink>
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

export default Products; 