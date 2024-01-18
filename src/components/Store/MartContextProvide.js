import { useState } from "react";
import MartContext from "./mymart-auth";

const MartContextProvider = (props) =>{

    const [cartItem,setCartItem] = useState([])
    const [totalAmount,setTotalAmount] = useState(0)
    const [totalItem,setTotalItem] = useState(0)
    const [showCart,setShowCart] = useState(false)
    const [isLogin,setIsLogin] = useState(false)
     const [token,setToken] = useState()

    const addCartItem = (itemInfo) =>{
      let data = {...itemInfo}
        let existItem = cartItem.find((item,ind) => item.title == itemInfo.title)
        console.log('exist',existItem)
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

    function handleLogin(){
      setIsLogin(!isLogin)
    }
   function handleToken(token){
     setToken(token)
   }
    return(
        <>
        <MartContext.Provider value={{addToCart:addCartItem,cartItem:cartItem,totalAmount:totalAmount,
          totalItem:totalItem,handleShowCart:handleShowCart,showCart:showCart,isLogin:isLogin,handleLogin:handleLogin,
          token:token,handleToken:handleToken}}>
        {props.children} 
        </MartContext.Provider>
        </>
    )
}
export default MartContextProvider;