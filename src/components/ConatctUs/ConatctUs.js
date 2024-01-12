import { useState } from "react"
import {Col, Row, Container, Form} from 'react-bootstrap'
import Styles from './ContactUs.module.css'
const ContactUs = () =>{

 const [userInfo,setUserInfo] = useState({name:'',email:'',number:0})
 const url = ""
 let response = ''
    const  handleSubmit = async (e) =>{
        e.preventDefault()
       try{
       const response = await fetch(`${url}/products.json`,{
         method:"POST",
         body:JSON.stringify(userInfo),
         headers : {'Content-Type' : 'application/json'}
       })
     }catch(err){
       throw new Error(err.message)
     }finally{
       response = 'successfully submited.'
     }

     setUserInfo({name:'',email:'',number:0})
    }

 // className="justify-content-md-center mt-4"
 const contact = () =>{
     return (
          <Container >
         <Row className="justify-content-md-center">
              <h3 className="fw-bold text-center mt-4">Contact Us</h3>
           <Col md={6}>
             <Form>
           
                 <Form.Label>Name</Form.Label>
                 <Form.Control className="small-input" type="text" name='name' value={userInfo.name} onChange={(e) =>setUserInfo({...userInfo,[e.target.name]:e.target.value}) }/>
                 <Form.Label>Email</Form.Label>
                 <Form.Control  type="email" name='email'  value={userInfo.email} onChange={(e) => setUserInfo({...userInfo,[e.target.name]:e.target.value})} />
                 <Form.Label>Number</Form.Label>
                 <Form.Control  type="tel" maxLength={10} name='number'  value={userInfo.number} onChange={(e) => setUserInfo({...userInfo,[e.target.name]:e.target.value})} />
                 <Row >
                 <Col md={6}>
                <button onClick={handleSubmit} className="btn btn-primary mt-4 ml-5">Submit</button>
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
           {contact()}
           {response && response}
        </>
    )
}

 export default ContactUs ;