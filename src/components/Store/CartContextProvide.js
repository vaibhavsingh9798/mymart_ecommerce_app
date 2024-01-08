import { useState } from "react";
import CartContext from "./Cart-auth";

const CartContextProvider = (props) =>{

    const [cartItem,setCartItem] = useState([])
    const [totalAmount,setTotalAmount] = useState(0)
     
    const addCartItem = (itemInfo) =>{
      let data = {...itemInfo}
        let existItem = cartItem.find((item,ind) => item.title == itemInfo.title)
        console.log('exist',existItem)
        if(existItem){
          existItem.quantity += 1
        }
        else{
          data.quantity = 1
          setCartItem([...cartItem,data])
        }
      
       let newTotal = totalAmount + data.price
       setTotalAmount(newTotal)
    }
    return(
        <>
        <CartContext.Provider value={{addToCart:addCartItem,cartItem:cartItem,totalAmount:totalAmount}}>
        {props.children} 
        </CartContext.Provider>
        </>
    )
}
export default CartContextProvider;