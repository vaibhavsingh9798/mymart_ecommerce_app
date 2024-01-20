import { useContext, useState, useEffect } from 'react'
import {Container,Form,Button,Row,Col} from 'react-bootstrap'; 
import MartContext from '../Store/mymart-auth';
import { useNavigate} from 'react-router-dom'
const AuthForm = () => {
  
const API_KEY = 'AIzaSyCyYc54w-rkp4LUY1keG0h7wOfbOKrQeaM'
const URL_SIGNUP = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`
const URL_SIGNIN = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`

const [formData, setFormData] = useState({email:'',password:''})
const [isSingup, setIsSingnup] = useState(false)
const [isLoading, setIsLoading] =  useState(false)
const [error,setError] = useState('')

const martCtx = useContext(MartContext)
const navigate = useNavigate()



    const handleChange = (e) =>{
       let {name,value} = e.target;
       setFormData({...formData,[name]:value})
       setError(null)
      
    }

    const handleClick = (e) =>{
        e.preventDefault()
        setIsSingnup(!isSingup)
        setError(null)
        
    }

    const handleSubmit = async (e) =>{
        e.preventDefault()
        setIsLoading(true)
          try{
            if(!isSingup){
        let response = await fetch(URL_SIGNUP,{
            method: 'POST',
            body:JSON.stringify({
                email: formData.email,
                password: formData.password,
                returnSecureToken : true,
                
            }),
            headers:{
                'Content-Type' : 'application/json'
            }
        })
        let data = await response.json()
        if(response.ok){
        console.log('successfull signup',data)
        setIsSingnup(!isSingup)
        setError(null)
        }else{
            let errorMsg = data.error.message ||  'Authentication failed!'  ;
            throw new Error(errorMsg)
        }
    }else{
        let response = await fetch(URL_SIGNIN,{
            method:'POST',
            body:JSON.stringify({
                email: formData.email,
                password: formData.password,
                returnSecureToken : true
            }),
            headers:{
                'Content-Type':'application/json'
            }
        })
        let data = await response.json() 
        if(response.ok && data){
          martCtx.handleLogin(data.idToken)
          navigate('/products')
        }else{
            let errorMsg = data.error.message ||  'Authentication failed!'  ;
            throw new Error(errorMsg)
        }

    }
            
    }catch(err){
        setError(err.message)
    }
        
        localStorage.setItem('email',JSON.stringify(formData.email))
        setFormData({email:'',password:''})
        setIsLoading(false)
   
    }

    const form = () =>{
        return(
            <Container className="mt-5 text-center bg-info">
            <Row className="justify-content-md-center">
              <Col xs={12} md={6}>
                <h2 className="mb-4 mt-3">{isSingup ? 'Login' : 'Sign Up'}</h2>
                <Form onSubmit={handleSubmit}>
             
                  <Form.Group controlId="formEmail">
                    <Form.Label column='lg' >Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  
                  </Form.Group>
      
                  <Form.Group controlId="formPassword">
                    <Form.Label className='mt-3' column='lg'>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter your password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit" className='mt-5 mb-3'>
                  { isLoading ? 'Sending request....' : isSingup ? 'Login' : 'Sign Up'}
                 
                  </Button>
                </Form>
               
                {!isSingup && <p onClick={handleClick}>Login with existing account</p>}
                {isSingup && <p onClick={handleClick}>New to MyMart? Create an account</p> }
                {error && error}
              </Col>
            </Row>
          </Container>
        )
    }
  
    return(
        <>
        {form()}
        </>
    )
}

export default AuthForm ;