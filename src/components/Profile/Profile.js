import { useContext, useState } from 'react'
import {Container,Form,Button,Row,Col} from  'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import MartContext from '../Store/mymart-auth'
const Profile  = () => {
 const [password,setPassword] = useState('')
 const API_KEY = 'AIzaSyCyYc54w-rkp4LUY1keG0h7wOfbOKrQeaM'
const URL_RESET = `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${API_KEY}`

 const martCtx =  useContext(MartContext)
 const token = localStorage.getItem('token')
 const navigate = useNavigate()

 const handleSubmit = async (e) =>{
    e.preventDefault()
    console.log('password',password)
   try{
  let response = await fetch(URL_RESET,{
    method:'POST',
    body: JSON.stringify({
        password : password,
        idToken: token,
        returnSecureToken : true,
        
    }),
    headers:{
        'Content-Type':'application/json'
    }
  })

  let data = await response.json()
   if(response.ok){
    localStorage.setItem('token',data.idToken)
    navigate('/auth')
   }else{
     alert('something wrong')
   }
   }catch(err){
    alert(err.message)
   }
 }
    const form = () => {
        return(
            <Container className="mt-5 text-center">
            <Row className="justify-content-md-center">
              <Col xs={12} md={6}>
                <h2 className="mb-4 mt-3">Your user profile</h2>
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formPassword">
                    <Form.Label className='mt-3' column='lg'>New Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter your password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit" className='mt-5 mb-3'>
                   Change Password
                  </Button>
                </Form>
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

export default Profile