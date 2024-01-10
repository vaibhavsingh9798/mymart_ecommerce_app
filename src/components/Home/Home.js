import { Button } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import styles from './Home.module.css'
const Home = () =>{
    const items = [
        { date: 'JAN20', category: 'Electronic', location: 'Delhi' },
        { date: 'JAN22', category: 'jewelery', location: 'Mumbai' },
        { date: 'JAN26', category: `Men's Clothing`, location: 'Chennai' },
        { date: 'JAN30', category: `women's clothing`, location: 'Kolkata' },
      ];

      function printList(){
      return(
        items.map((item,ind) => 
        <ListGroup.Item>
            <div className={styles.items}>
          <div className={styles.item}>
            {item.date}
          </div>
          <div className={styles.item}>
            {item.category}
          </div>
          <div className={styles.item}>
            {item.location}
          </div>
          <div className={styles.item}>
           <Button variant='primary'>Buy</Button>
          </div>
          </div>
        </ListGroup.Item>
    
        )
      )}
    


          return (

            <div className={styles.container}>
                 <h3 className="fw-bold text-center mt-4 mb-4">SALE CATEGORIES</h3>
              
          <ListGroup variant="flush">
           {printList()}
         </ListGroup>

        </div>
    )
}

export default Home 



