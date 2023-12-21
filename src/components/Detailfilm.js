// // MovieModal.js
// import React from 'react';
// import { Modal, Button } from 'react-bootstrap';

// export default function MovieModal({ show, handleClose, movie }) {
//   return (
//     <Modal show={show} onHide={handleClose}>
//     <Modal.Header closeButton>
//       <Modal.Title>{movie.Title}</Modal.Title>
//     </Modal.Header>
//     <Modal.Body>
//       <p>Year: {movie.Year}</p>
//       {movie.Plot ? <p>Plot: {movie.Plot}</p> : <p>Plot not available</p>}
//       <p>Director: {movie.Director || 'Not available'}</p>
//       <p>Type: {movie.Type || 'Not available'}</p>
//       {movie.Poster && <img src={movie.Poster} alt={`${movie.Title} Poster`} style={{ maxWidth: '100%' }} />}
//       <p>halo</p>
//       {/* Add more details as needed */}
//     </Modal.Body>
//     <Modal.Footer>
//       <Button variant="secondary" onClick={handleClose}>
//         Close
//       </Button>
//     </Modal.Footer>
//   </Modal>
//   );
// }
