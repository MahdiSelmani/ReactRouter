import { Modal, Button } from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";
import { useState } from 'react';

function AddMovie({ movies, setMovies }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [photo, setPhoto] = useState('');
    const [rate, setRate] = useState(0);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const save = () => setMovies([...movies, { id: Math.random(), title, description, photo, rate }]);
    const ratingChanged = (newRating) => {
        setRate(newRating);
    };
    return (
        <>
            <Button variant="primary" onClick={handleShow} style={{ width: '20%', margin: 'auto', marginTop: '50px' }}>
                Add A New Movie
            </Button>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>New Movie</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <label>Title</label><input type='text' onChange={(event) => setTitle(event.target.value)}></input>
                        <label>Description</label><input type='text' onChange={(event) => setDescription(event.target.value)}></input>
                        <label>Photo</label><input type='text' onChange={(event) => setPhoto(event.target.value)}></input>
                        <label>Rating</label>
                        <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={24}
                            activeColor="#ffd700"
                        />

                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => { save(); handleClose() }}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AddMovie;