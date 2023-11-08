import { Col, Container, Image, Row } from "react-bootstrap";
import styles from './Footer.module.css'
import facebook from '../../assets/images/facebook.png'
import spotify from '../../assets/images/spotify.png'
import youtube from '../../assets/images/youtube.png'

const Footer = () =>{
    return(
        <>
        <footer className=" mt-5 p-3 bg-info text-white text-center">
            <Container>
           <Row>
            <Col>
            <h1>My Mart</h1>
            </Col>
            <Col>
             <Row className="text-center mt-2">
                <Col  ><a href="https://www.youtube.com/"><Image src={youtube} alt="youtube" className={styles.img} /></a></Col>
                <Col ><a href="https://open.spotify.com/"><Image src={spotify} alt="spotify"  className={styles.img}/></a></Col>
                <Col ><a href="https://www.facebook.com/"><Image src={facebook} alt="facebook"  className={styles.img}/></a></Col>
             </Row>
            </Col>
           </Row>
           </Container>
        </footer>
        </>
    )
}

export default Footer ;