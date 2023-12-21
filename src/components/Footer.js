import { Container } from "react-bootstrap";
import ig from '../picture/ig-removebg-preview.png'
import fb from '../picture/fcb-removebg-preview.png'
import styles from './Footer.module.css'
import { FaInstagram} from "react-icons/fa";
import{FaFacebookSquare} from 'react-icons/fa';
import { BsWhatsapp} from "react-icons/bs";
import { BsTelegram} from "react-icons/bs";

export default function Footerfilm() {
    return(
        <Container fluid className={styles['bg']}>
            <Container >
                <h3 className="text-center text-light mb-5 pt-5">Temui Kami</h3>

                <div className="row justify-content-center pb-5">

                    <div className="col-lg-1 col-md-1 col-sm-1 d-flex mb-4 justify-content-center " >
                        <FaInstagram size='3rem' color="white"></FaInstagram>
                    </div>

                    <div className="col-lg-1 col-md-1 col-sm-1 d-flex mb-4 justify-content-center">
                        <FaFacebookSquare size='3rem' color="white"></FaFacebookSquare>
                    </div>

                    <div className="col-lg-1 col-md-1 col-sm-1 d-flex mb-4 justify-content-center">
                        <BsWhatsapp size='3rem' color="white"></BsWhatsapp>
                    </div>

                    <div className="col-lg-1 col-md-1 col-sm-1 d-flex mb-4 justify-content-center">
                        <BsTelegram size='3rem' color="white"></BsTelegram>
                    </div>
                </div>

            </Container>
        </Container>
    )
}