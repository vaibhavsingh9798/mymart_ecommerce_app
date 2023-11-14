import {  Button, CloseButton,   Table } from 'react-bootstrap';
import styles from './Cart.module.css'
import { useContext } from 'react';
import CartContext from '../Store/Cart-auth';
const Cart = () =>{
   let cartCtx =  useContext(CartContext)
    const cartElements = [
        {
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        quantity: 2,
        },
        {
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        quantity: 3,
        },
        {
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        quantity: 1,
        }
        ]    
    return(
        <>
         <div className={styles.cartPage}>
            <div className={styles.closeBtn}>
           <CloseButton />
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
                cartCtx.cartItem.map((item,ind)=>(
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

