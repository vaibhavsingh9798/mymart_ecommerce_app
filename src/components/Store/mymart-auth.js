import { createContext } from "react";


const MartContext = createContext({
addCartItem:()=>{},cartItem:[],setCart:()=>{},totalItem:0,setTotalItem:()=>{},
setTotalAmount:()=>{},totalAmount:0,isLoading:false,handleShowCart:()=>{},
showCart:false,isLogin:false,handleLogin:()=>{},handleLogout:()=>{} })
  

export default MartContext;