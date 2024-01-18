import { createContext } from "react";


const CartContext = createContext({
    addCartItem:()=>{},cartItem:[],totalAmount:0,totalItem:0,
    handleShowCart:()=>{},showCart:false,isLogin:false,handleLogin:()=>{}
})
  

export default CartContext;