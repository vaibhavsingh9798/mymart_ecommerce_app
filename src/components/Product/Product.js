import { Button, Col, Container, Row ,Form} from "react-bootstrap"
import './Product.css'
import { useContext, useState, useEffect, useCallback } from "react"
import CartContext from "../Store/Cart-auth"

const Product = () =>{
  const [products,setProducts] = useState([])
  const [loading,setLoading] = useState(true)
  const [error,setError] = useState(null)
  const [customProduct,setCustomProduct] = useState({title:'',price:0,image:''})
  
  const url = 'https://react-mymart-default-rtdb.firebaseio.com/'
const fetchProduct = useCallback(async () => {
    try{
  let response = await  fetch(`${url}/products.json`)
   let data    = await response.json()
   if(!data) throw new Error('Data Not Found !');
   console.log('data...',data)
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
 
    const cartCtx = useContext(CartContext)

    const handleAddToCart = (event,item)=>{
        event.preventDefault()
        cartCtx.addToCart(item)
       
    }

    const handleDelete = (event,item) =>{
      event.preventDefault()
      console.log('item....',item)
      const id = item.id
      try{
      fetch(`${url}/products/${id}.json`,{
        method:'DELETE'
      })
      fetchProduct()
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
                    <div className="product-card">
                      <h5>{product.title}</h5>
                      <img src={product.image} alt={product.title} style={{ width: '100px', height: '100px' }}/>
                         <Row className=" mt-4">
                        <Col> <p>Rs {product.price}</p></Col>
                        <Col><Button onClick={(event) => handleAddToCart(event,product)} className="w-5">Add to Cart</Button></Col>
                        <Col><Button onClick={(event) => handleDelete(event,product)} className="w-5" variant="danger">Delete</Button></Col>
                       </Row>
                    </div>
                    </Col>
                ))}
             </Row>
             </Container>)
        }

        const  handleSubmit = async (e) =>{
               e.preventDefault()
              console.log('hs',customProduct)
              try{
              const response = await fetch(`${url}/products.json`,{
                method:"POST",
                body:JSON.stringify(customProduct),
                headers : {'Content-Type' : 'application/json'}
              })

              const data = await response.json()
              console.log('response data ..',data)
              fetchProduct()
            }catch(err){
              setError(err.message)
            }
            setCustomProduct({title:'',price:0,image:''})
           }
    
 
        const addProduct = () =>{
            return (
                <Container className="justify-content-md-center mt-4">
                <Row className="justify-content-md-center">
                     <h3 className="fw-bold text-center mt-4">Add Product</h3>
                  <Col md={6}>
                    <Form>
                  
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" name='title' value={customProduct.title} onChange={(e) => setCustomProduct({...customProduct,[e.target.name]:e.target.value}) }/>
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="number" name='price' value={customProduct.price} onChange={(e) => setCustomProduct({...customProduct,[e.target.name]:e.target.value})} />
                        <Form.Label>Image URL</Form.Label>
                        <Form.Control type="text" name='image' value={customProduct.image} onChange={(e) => setCustomProduct({...customProduct,[e.target.name]:e.target.value})} />
                        <Row >
                        <Col md={6}>
                       <button onClick={handleSubmit} className="btn btn-primary mt-4">Submit</button>
                       </Col>
                       </Row>
                    </Form>
                  </Col>
                </Row>
              </Container>
            )
        }

       
    return(
        <>
     
        {!loading && products.length > 0 && printProduct()}
        {!loading && error &&<h5>{error}</h5>}
          {loading && <h5>Loading.....</h5>}
          {addProduct()}
        </>
    )
}

export default Product; 