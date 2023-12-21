import { Container } from "react-bootstrap";
import Cardfavorite from "./Cardfavorite";
// import gambar1 from '../P/card-1.jpg'
import gambar1 from '../picture/card-1.jpg'
import './favorite.css'
import gambar2 from '../picture/harys1.jpg'
import gambar3 from '../picture/hobit.jpg'
import gambar4 from '../picture/ip.jpg'

export default function Menufavorite() {
    return(
        <Container fluid className="bg">
            <Container className="py-5">
                <h2 className="text-light mb-5">My Favorite</h2>

                <div className="row">

                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <Cardfavorite image={gambar1} rating={10} tahun={2023} judul={'The Mario Bros'}></Cardfavorite>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <Cardfavorite image={gambar2} rating ={10} tahun={2021} judul={'Harry Potter'}></Cardfavorite>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <Cardfavorite image={gambar3} rating={10} tahun={2012} judul={'Hobbit'}></Cardfavorite>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <Cardfavorite image={gambar4} rating={10} tahun={2019} judul={'IP Man 4'}></Cardfavorite>
                    </div>

                </div>
            </Container>
        </Container>
    )
}