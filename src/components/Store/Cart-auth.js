import { createContext } from "react";


const CartContext = createContext({addCartItem:()=>{},cartItem:[],totalAmount:0})
  

export default CartContext;