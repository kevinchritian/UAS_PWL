import { Button, Container, TabContainer, Table } from "react-bootstrap";
import './info.css'
import gambar1 from '../picture/ip.jpg'
// import {IoAddCircleSharp} from 'react-icons/io'
import {BiSolidMessageSquareAdd} from 'react-icons/bi'
import {BsBackspaceFill} from 'react-icons/bs'
import { Link } from "react-router-dom";

export default function Infofilm(props) {
    return(
        
        <Container fluid>
            <Button variant="outline-success border border-success mt-3" as={Link} to={props.link}><BsBackspaceFill></BsBackspaceFill> Back</Button>
            <Container className="py-5 content">
                <div className="row">
                    

                    <div className="col-lg-6 gambar col-md-6 mb-sm-5 mb-5 mb-md-0">
                        <img className="picture border border-warning border-2" src={props.gambar}></img>
                    </div>
                    
                    <div className="col-lg-6 col-md-6 deskripsi">
                        <div className="text-light col-lg-10 col-md-9">
                            <div>
                                    
                                <h2 className="text-warning text-center mb-4">{props.judul}</h2>
                                <p><strong>Rating :</strong> {props.rating}</p>
                                <p><strong>Year :</strong> {props.year}</p>
                                <p><strong>Released :</strong> {props.realese}</p>
                                <p><strong>Genre :</strong> {props.genre}</p>
                                <p><strong>Actor : </strong>{props.actor}</p>
                                <p><strong>Bahasa :</strong> {props.bahasa}</p>
                                <p><strong>Plot :</strong> {props.plot}</p>
{/* 
                                <table className="tabel">
                                    <tbody>
                                        <tr>
                                            <td className="py-2 title fw-bold">Rating :</td>
                                            <td className="ps-3">{props.rating}</td>
                                        </tr>
                                        <tr>
                                            <td className="py-2 title fw-bold">Year :</td>
                                            <td className="ps-3">{props.year}</td>
                                        </tr>
                                        <tr>
                                            <td className="py-2 title fw-bold">Released:</td>
                                            <td className="ps-3">{props.realese}</td>
                                        </tr>
                                        <tr>
                                            <td className="py-2 title fw-bold">Genre :</td>
                                            <td className="ps-3">{props.realese}</td>
                                        </tr>
                                        <tr>
                                            <td className="py-2 title fw-bold">Actor :</td>
                                            <td className="ps-3">{props.actor}</td>
                                        </tr>
                                        <tr>
                                            <td className="py-2 title fw-bold">Bahasa :</td>
                                            <td className="ps-3">{props.bahasa}</td>
                                        </tr>
                                        <tr>
                                            <td className="py-2 title fw-bold text-top">Plot :</td>
                                            <td className="ps-3">{props.plot}</td>
                                        </tr>
                                    </tbody>
                                </table> */}
                                
                                {/* <Button variant="success" className="mt-3"><BiSolidMessageSquareAdd className="me-2"></BiSolidMessageSquareAdd>Favorite</Button> */}
                                <Button variant="success"><BiSolidMessageSquareAdd></BiSolidMessageSquareAdd>Favorite</Button>

                            </div>
                        </div>
                    </div>

                </div>
            </Container>

        </Container>
    )
}