import { createContext } from "react";


const MartContext = createContext({
    addCartItem:()=>{},cartItem:[],totalAmount:0,totalItem:0,
    handleShowCart:()=>{},showCart:false,isLogin:false,handleLogin:()=>{},handleLogout:()=>{}
    
})
  

export default MartContext;