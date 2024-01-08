import { Container, Row } from 'react-bootstrap'
import styles from './About.module.css'
import martPic from "../../assets/images/mymart.png"
const About = () => {
    return (
        <>
            <Container className="About" style={{ width: '50%' }}>
                <Row className="justify-content-center">
                    <h3 className="fw-bold text-center mt-4 mb-4">About</h3>
                </Row>
                <Row>
                    <p>
                        At MyMart, our goal is to make shopping easier, faster, and more convenient 
                        than ever before for our customers. We are committed in our mission to build a 
                       
                        trustworthy online marketplace which offers the widest range of products across 
                        the country. With our proven user experience and reliable services, we are
                        <img src={martPic} alt="MyMart" className={styles.img}/>
                         committed to provide customers in India with a trusted and hassle-free
                          one-stop-shop for all their shopping needs across various categories such as
                           Electronics, Grocery, Fashion, Home & Kitchen, etc.
                          

                        For over 17 years of operations with Reliance Retail, we have built most 
                        reliable retail presence that caters to the unique needs of customers in India,
                         and we are committed to bring a similar experience online with MyMart. Our vast
                          exceptional selection of products make our online portal the preferred shopping 
                          destination for all kinds of customers.

                        With our convenient payment options, on time delivery services, 
                        dependable customer service, and secure online transactions, you can now shop
                         smarter, faster and more seamlessly within a few clicks. Our commitment to 
                         excellence has been recognized worldwide, and we look forward to offering our
                          customers a delightful shopping experience online with MyMart. #Happy Shopping 
                          with MyMart.
                    </p>
                </Row>
            </Container>
        </>
    )
}

export default About