import './about.css'
import { Container, Card } from "react-bootstrap"
import gambar_about from '../picture/movie_about-removebg-preview.png'
import Benefit from './manfaat' 
import { MdAttachMoney } from 'react-icons/md';
import {BiSearchAlt2} from 'react-icons/bi'
import {IoMdCheckmarkCircleOutline} from 'react-icons/io'
import{BsFillPhoneFill}from 'react-icons/bs'

export default function Tentang() {
    return (
        <Container fluid className='my-5 template'>

            <Container className='text-white about'>
                
                <div className='row'>

                    <div className='col-lg-6 manfaat d-sm-block d-none mt-5'>
                        <div className='gambar'>
                            <img src={gambar_about} className='img_about'></img>
                        </div>
                    </div>

                    <div className='col-lg-6 deskripsi mt-5'>
                        <div>
                            <h3 className='text-center mb-4 mt-3'>About Sinefilia Movie</h3>
                            <p className='text'>Selamat datang di Sinefilia Movie! Web Movie adalah sumber utama untuk informasi film terkini. Di [Nama Website], Anda akan menemukan semua yang Anda butuhkan tentang dunia film, termasuk informasi tentang film-film terbaru, pemain, ulasan, trailer, dan tanggal rilis. Tujuan [Website ini] sederhana: memastikan Anda tetap terhubung dengan dunia film tanpa kerumitan.</p>
                            <p className='text'>Sinefilia Movie didirikan dengan hasrat terhadap perfilman dan dengan harapan membantu pengunjung untuk mengeksplorasi film-film terbaru dengan mudah. [Website ini] merangkum informasi dengan cara yang mudah dimengerti, sehingga Anda dapat dengan cepat menemukan apa yang Anda cari.</p>
                        </div>
                    </div>

                </div>
            </Container>


            <Container className='py-5'>
                <h3 className='text-white judul mb-5 text-center mt-5'>Kenapa Memilih Kami ?</h3>
                <div className='row'>
                    
                    <div className='col-lg-3 col-md-6'>
                        <Card className='mb-5 text-center d-flex align-items-center pt-2 bg-dark border border-warning'>
                            <MdAttachMoney size=' 3rem ' color='white' className='mt-3'></MdAttachMoney>
                            <Benefit manfaat={'Free Access'} deskripsi={'Website kami gratis akses, sehingga User tidak akan dikenakan biaya apa pun untuk mengakses informasi atau melakukan pencarian film.'}></Benefit>
                        </Card>
                    </div>

                    <div className='col-lg-3 col-md-6'>
                        <Card className='mb-5 text-center d-flex align-items-center pt-2 bg-dark border border-warning'>
                            <BiSearchAlt2 size='3rem' color='white' className='mt-3'></BiSearchAlt2>
                            <Benefit manfaat={'Pencarian Mudah'} deskripsi={'Website Kami menyediakan fitur pencarian yang user-friendly sehingga user dapat dengan cepat menemukan film yang mereka cari'}></Benefit>
                        </Card>
                    </div>

                    <div className='col-lg-3 col-md-6'>
                        <Card className='mb-5 text-center d-flex align-items-center pt-2 bg-dark border border-warning'>
                            <IoMdCheckmarkCircleOutline size='3rem' color='white' className='mt-3'></IoMdCheckmarkCircleOutline>
                            <Benefit manfaat={'Accurate Data'} deskripsi={'Kami menyediakan informasi yang akurat tentang film, seperti pemain, sutradara, tahun rilis, dan ringkasan plot.'}></Benefit>
                        </Card>
                    </div>

                    <div className='col-lg-3 col-md-6'>
                        <Card className='mb-2 text-center d-flex align-items-center pt-2 bg-dark border border-warning'>
                            <BsFillPhoneFill size={'3rem'} color='white' className='mt-3'></BsFillPhoneFill>
                            <Benefit manfaat={'Responsive'} deskripsi={'Kami memastikan bahwa situs Anda dapat diakses dengan baik di berbagai perangkat, termasuk ponsel, tablet, dan komputer.'}></Benefit>
                        </Card>
                    </div>

                </div>
            </Container>

        </Container>
    )
}