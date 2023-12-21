import { Button, Container,Form, FormLabel } from "react-bootstrap";
// import{IoChevronBackCircleSharp} from 'react-icons/io'
import{GiExitDoor}from 'react-icons/gi'
import { Link } from "react-router-dom";

export default function Filterform(){
    return(
        <Container fluid>
            <Container className="py-5 col-9">
                {/* <Link to='/'><Button className="mb-3" variant="outline-warning"><GiExitDoor></GiExitDoor> Kembali</Button></Link> */}
                <Link to='/'><Button className="mb-3" variant="outline-warning"><GiExitDoor></GiExitDoor>Kembali</Button></Link>
                
                
                <div className="borders ">
                    <Form>
                        <div className="row">
                            
                            <h2 className="text-center mt-3 mb-5 text-light">Filter Pencarian</h2>



                            <div className="text-light box col-lg-6">
                                <div className="col-10 mb-4">
                                    <Form.Label className="fw-bold">Judul</Form.Label>
                                    <Form.Control type="text"/>
                                </div>
                            </div>

                            <div className="text-light box col-lg-6">
                                <div className="col-10 mb-4">
                                    <Form.Label className="fw-bold">Negara</Form.Label>
                                    <Form.Control type="text"/>
                                </div>
                            </div>

                            <div className="text-light box col-lg-6">
                                <div className="col-10 mb-4">
                                    <Form.Label className="fw-bold">Tahun</Form.Label>
                                    <Form.Control type="number"/>
                                </div>
                            </div>


                            <div className="col-lg-6 text-light  box">
                                <div className="col-10 mb-4">
                                    <Form.Label className="fw-bold">Type</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                        <option>Pilih Type</option>
                                        <option value="1">Movie</option>
                                        <option value="2">Series</option>
                                        <option value="3">episode</option>
                                    </Form.Select>
                                </div>
                            </div>

                            <div className="text-light  box">
                                <div className="col-lg-6 col-10">
                                    <Form.Label className="fw-bold">Sorting</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                        <option>Pilih Sorting</option>
                                        <option value="1">Rating Ascending</option>
                                        <option value="2">Rating Descending</option>
                                        <option value="3">Year Ascending</option>
                                        <option value="4">Year Descending</option>
                                        <option value="5">Title Ascending</option>
                                        <option value="6">Year Descending</option>
                                    </Form.Select>
                                </div>
                            </div>

                        </div>

                        <div className="box text-light mt-5 mb-4">
                            <Button variant="success" className="border border-light kirim fw-bold">Search</Button>
                        </div>


                    </Form>
                </div>
            </Container>
        </Container>
    )
}