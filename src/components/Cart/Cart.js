import {  Button, CloseButton,   Table } from 'react-bootstrap';
import styles from './Cart.module.css'
import { useContext } from 'react';
import MartContext from '../Store/mymart-auth';

const Cart = () =>{


   let cartCtx =  useContext(MartContext)

        
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

