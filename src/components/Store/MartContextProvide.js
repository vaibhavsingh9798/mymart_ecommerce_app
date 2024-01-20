import { useEffect, useState } from "react";
import MartContext from "./mymart-auth";

const MartContextProvider = (props) =>{
   
    let initialIsLogin = localStorage.getItem('token')
   
    const [cartItem,setCartItem] = useState([])
    const [totalAmount,setTotalAmount] = useState(0)
    const [totalItem,setTotalItem] = useState(0)
    const [showCart,setShowCart] = useState(false)
    const [token,setToken] = useState(initialIsLogin)
    const [isLogin,setIsLogin] = useState(initialIsLogin)
    let email = JSON.parse(localStorage.getItem('email'))
    email = email.replace('@','').replace('.','')
      const URL = `https://crudcrud.com/api/46d3f64448544138b8d73c9e037d49b3/${email}`

    const addCartItem = async (itemInfo) =>{
      let data = {...itemInfo}
        let existItem = cartItem.find((item,ind) => item.title == itemInfo.title)
        if(existItem){
          existItem.quantity += 1
          setTotalItem(totalItem + 1)
        }
        else{
          data.quantity = 1
          setCartItem([...cartItem,data])
          setTotalItem(totalItem + 1)
        }
      
       let newTotal = totalAmount + data.price

       setTotalAmount(newTotal)
       
    }

    function handleShowCart(val){
      setShowCart(val)
    }

    function handleLogin(token){
      setToken(token)
      setIsLogin(true)
        localStorage.setItem('token',token)
    }

    function hanleLogout(){
      setToken(null)
      setIsLogin(false)
        localStorage.removeItem('token')
    }

    const postCart = async () =>{
      try{
        console.log('post hit')
        let response = await fetch(URL,{
         method:'POST',
         headers:{'Content-Type': 'application/json'},
         body:JSON.stringify({
            items:[...cartItem],
            totalAmount:totalAmount
         }),
        
        })
 
        console.log('add item res',response)
       }catch(err){
         console.error(err.message)
       }
    }

    useEffect(()=>{
     
      postCart()
    },[cartItem])
 
    return(
        <>
        <MartContext.Provider value={{addToCart:addCartItem,cartItem:cartItem,totalAmount:totalAmount,
          totalItem:totalItem,handleShowCart:handleShowCart,showCart:showCart,isLogin:isLogin,handleLogin:handleLogin,
          handleLogout:hanleLogout }}>
        {props.children} 
        </MartContext.Provider>
        </>
    )
}
export default MartContextProvider;