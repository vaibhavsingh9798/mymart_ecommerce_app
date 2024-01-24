import { useState } from "react";
import MartContext from "./mymart-auth";


const MartContextProvider = (props) =>{
   
    let initialIsLogin = localStorage.getItem('token')
   
   
    const [totalItem,setTotalItem] = useState(0)
    const [showCart,setShowCart] = useState(false)
    const [isLogin,setIsLogin] = useState(initialIsLogin)
    const [isLoading,setIsLoading] = useState(false) 
    const [cartItem,setCartItem] = useState([])
    const [totalAmount,setAmount] = useState(0)
    
   let email = localStorage.getItem('email') 
       email = email.replace('@','').replace('.','')
   const URL = `https://react-mymart-default-rtdb.firebaseio.com/${email}.json`

    const addCartItem = async (itemInfo) =>{
      setIsLoading(true)
      try {
        const response = await fetch(`${URL}`,{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(itemInfo),
        });
    
        if (response.ok) 
          alert('Item added successfully')
         else 
          throw new Error('Failed to add item:');
        
      } catch (error) {
        console.error('Error during fetch:', error.message);
      }
      setIsLoading(false)
    }

    function handleShowCart(val){
      setShowCart(val)
    }

    function handleLogin(token,email){
      setIsLogin(true)
      localStorage.setItem('token',token)
      localStorage.setItem('email',email)
    }

    function hanleLogout(){
      setIsLogin(false)
        localStorage.removeItem('token')
    }

    function setCart(items){
       setCartItem(items)
    }

    function setTotalAmount(amont){
      setAmount(amont)
    }

 
    return(
        <>
        <MartContext.Provider value={{addToCart:addCartItem,setTotalItem:setTotalItem,isLoading:isLoading,
          totalItem:totalItem,handleShowCart:handleShowCart,showCart:showCart,isLogin:isLogin,
          handleLogin:handleLogin, handleLogout:hanleLogout,setCart:setCart,
          cartItem:cartItem,totalAmount:totalAmount,setTotalAmount:setTotalAmount}}>
        {props.children} 
        </MartContext.Provider>
        </>
    )
}
export default MartContextProvider;