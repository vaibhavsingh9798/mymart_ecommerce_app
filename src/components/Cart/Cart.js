import {  Button, CloseButton,   Table } from 'react-bootstrap';
import styles from './Cart.module.css'
import { useContext, useEffect } from 'react';
import MartContext from '../Store/mymart-auth';
const Cart = () =>{
  let email = JSON.parse(localStorage.getItem('email'))
  email = email.replace('@','').replace('.','')
  const URL = `https://crudcrud.com/api/46d3f64448544138b8d73c9e037d49b3/${email}`

   let cartCtx =  useContext(MartContext)
        let items =  cartCtx.cartItem

      const fethItems = async () =>{
        try{
        let response = await fetch(URL)
        let data = await response.json()
        console.log('cart fetch',data)
        }catch(err){
          console.error(err.message)
        }
      }
        useEffect(()=>{
         fethItems()
        },[])

    return(
        <>
         <div className={styles.cartPage}>
            <div className={styles.closeBtn}>
           <CloseButton onClick={() => cartCtx.handleShowCart(false)}/>
           </div>
            <h3 className='text-center mb-4'>Cart</h3>
             <Table responsive>
               <thead>
                <tr className='text-center'>
                    <th>ITEM</th>
                    <th>PRICE</th>
                    <th>QUANTITY</th>
                </tr>
               </thead>
               <tbody>
               {
               items.map((item,ind)=>(
                  <tr key={ind} className='text-center'>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>{item.quantity}</td>
                  </tr>
                ))
               }
               </tbody>
             </Table>
             <h4 className={styles.price}>Total &#x20B9; {cartCtx.totalAmount}</h4>
             <div className={styles.buyBtn}>
             <Button className='bg-info mt-2'>PURCHASE</Button>
             </div>
         </div>
        </>
    )
}

export default Cart;

