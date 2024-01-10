import { useState } from "react";
import CartContext from "./Cart-auth";

const CartContextProvider = (props) =>{

    const [cartItem,setCartItem] = useState([])
    const [totalAmount,setTotalAmount] = useState(0)
    const [totalItem,setTotalItem] = useState(0)
    const [showCart,setShowCart] = useState(false)
     
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

    return(
        <>
        <CartContext.Provider value={{addToCart:addCartItem,cartItem:cartItem,totalAmount:totalAmount,totalItem:totalItem,handleShowCart:handleShowCart,showCart:showCart}}>
        {props.children} 
        </CartContext.Provider>
        </>
    )
}
export default CartContextProvider;