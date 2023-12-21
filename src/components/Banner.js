import { Button, Container,Card } from 'react-bootstrap'
import '../picture/marvelwalpaper.webp'
import './banner.css'
import gambar1 from '../picture/banner_img1.jpg'
import gambar2 from '../picture/gambar_banner.webp'
import { Link } from 'react-router-dom'

export default function Banner() {
    return (
        <Container fluid className='banner'>
            <Container className='content text-light'>
                <div className='row'>

                    <div className='col-lg-6 col-md-6 kolom_1'>
                        <div className='col-lg-11 text-lg-start text-md-start text-center'>
                            <h2 className='fs-1'>Sinefilia Movie Pilihan Hiburan Terbaik Keluarga</h2>
                            <p className='mt-3'>lorem asias faf   bfgfagf uai fauau ga aa ag a fhash v uu y a gu  rg a fhksf abfkjh  fuiasgfui</p>
                            <Link to ='/films'><Button variant='warning' className='text-white btn fw-bold mt-3'>Film</Button></Link>
                        </div>
                    </div>

                    <div className='col-lg-6 col-md-6 kolom_2 d-md-block d-none'>
                        <div className="gambar">
                            
                            <div>
                                <div className='card1'>
                                    <img src={gambar1} className='banner_img'></img>
                                </div>

                                <div className='card2'>
                                    <img src={gambar2} className='banner_img'></img>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </Container>
        </Container>

    )
}
