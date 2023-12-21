import { Container,Card, CardBody, Button } from "react-bootstrap";
import card from'./Kartufilter.module.css'
// import bintang from '../picture/—Pngtree—vector complex star icon_4183954.png'
import bintang from '../picture/—Pngtree—vector complex star icon_4183954.png'

export default function Cardfavorite(props) {

    return(
        <div>
            {/* <Card className={card.bg + "mb-5"}> */}
            <Card className='text-center mb-5' style={{ borderColor: 'goldenrod' }}>
                <img src={props.image} className="card-img-top"></img>
                <Card.Body className={card.kartu + ' text-light'}>
                    <Card.Title className=" fw-bold">{props.judul}</Card.Title>
                    <p className="card-text mt-3 ">Rating : <img src={bintang} className={card['logo']}></img> {props.rating}</p>
                    <p className="card-text ">Tahun : {props.tahun}</p>
                    {/* <Button variant="success" className="mx-3">Lihat</Button> */}
                    {/* <Button variant="danger" className="mx-3">Hapus</Button> */}
                    <button className="btn btn-success me-3" style={{width:'80px'}}>Klik</button>
                    <buttn className='btn btn-danger ms-3' style={{width:'80px'}}>hapus</buttn>
                </Card.Body>
            </Card>
        </div>
    )
}