import {useState} from 'react'
import {Container,Form,Button,Row,Col} from 'react-bootstrap'
import  './Products.css'
import { useNavigate } from 'react-router-dom'
const AddProduct = () =>{

    const [customProduct,setCustomProduct] = useState({title:'',price:0,image:''})

    const url = 'https://react-mymart-default-rtdb.firebaseio.com'
    
    const navigate = useNavigate()
    const  handleSubmit = async (e) =>{
        e.preventDefault()
       console.log('hs',customProduct)
   
       try{
        if(!customProduct.image && !customProduct.price && !customProduct.title)
        throw new Error('Enter valid product details')

       const response = await fetch(`${url}/products.json`,{
         method:"POST",
         body:JSON.stringify(customProduct),
         headers : {'Content-Type' : 'application/json'}
       })

       const data = await response.json()
      
       if(response.ok){
       alert('product added')
       navigate('/products')
       }else{
        let errorMsg  = data.error.message || 'something wrong'
        throw new Error(errorMsg)
       }
     }catch(err){
       alert(err.message)
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
        {addProduct()}
        </>
    )
}

export default AddProduct ;