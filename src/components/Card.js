import React, { useState } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import card from './Kartu.module.css';
import bintang from '../picture/—Pngtree—vector complex star icon_4183954.png';

export default function Moviecard(props) {
  const [showDetails, setShowDetails] = useState(false);

  const handleShowDetails = () => setShowDetails(true);
  const handleCloseDetails = () => setShowDetails(false);

  return (
    <div>
      <Card className='mb-5' style={{ borderColor: 'goldenrod' }}>
        <img src={props.image} className="card-img-top" alt={props.judul} />
        <Card.Body className={card.kartu + ' text-light text-center'}>
          <Card.Title className="text-center fw-bold">{props.judul}</Card.Title>
          <p className="card-text mt-3">Rating : <img src={bintang} className={card['logo']} alt="Rating" /> {props.rating}</p>
          <p className="card-text">Tahun : {props.tahun}</p>
          <Button variant="outline-success" onClick={handleShowDetails}>Lihat</Button>




          {/* Modal for displaying details */}
          <Modal show={showDetails} onHide={handleCloseDetails}>
            <Modal.Header closeButton className='bg-dark border border-warning'>
              <Modal.Title className='text-warning'>{props.judul}</Modal.Title>
            </Modal.Header>
            <Modal.Body className={`${card.modalBody} border border-warning`}> 
            {props.image && (<div style={{ textAlign: 'center', marginBottom: '30px' }}><img src={props.image} alt={`${props.judul} Poster`} style={{ maxWidth: '100%', display: 'block', margin: '0 auto' }}/></div>)}
            <div className='text-light'>
              <p><span className='fw-bold'>Rating :</span> {props.rating}</p>
              <p><span className='fw-bold'>Tahun :</span> {props.tahun}</p>
              <p><span className='fw-bold'>Type :</span> {props.type}</p>
              <p><span className='fw-bold'>Negara :</span> {props.country}</p>
              <p><span className='fw-bold'>Bahasa :</span> {props.bahasa}</p>
              <p><span className='fw-bold'>Genre :</span> {props.genre}</p>
              <p><span className='fw-bold'>Actors :</span> {props.actors}</p>
              <p><span className='fw-bold'>Direktor :</span> {props.direktor}</p>
              <p><span className='fw-bold'>Plot :</span> {props.plot}</p>
            </div>
            </Modal.Body>
            <Modal.Footer className='bg-dark border border-warning'>
              <Button variant="secondary" onClick={handleCloseDetails}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>


        </Card.Body>
      </Card>
    </div>
  );
}
