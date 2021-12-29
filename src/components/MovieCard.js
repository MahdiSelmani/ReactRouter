import { Card, Button } from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom'



function MovieCard({ el, movies, setMovies }) {
    const filter = (id) => setMovies(movies.filter(el => el.id !== id))
    return (


        <Card style={{ width: '18rem', margin: '10px', borderRadius: '20px' }}>
            <Card.Img style={{ width: '17rem', height: '290px', borderRadius: '20px', alignSelf: 'center', margin: '10px' }} variant="top" src={el.photo} />
            <Card.Body>
                <Card.Title style={{ display: 'flex', justifyContent: 'center' }} >{el.title}</Card.Title>
                <Card.Text>
                    {el.description}
                </Card.Text>


            </Card.Body>
            <div style={{ display: 'flex', justifyContent: 'center' }}><Link to={`/Details/${el.id}`} >  <Button style={{ width: '120px', alignSelf: 'center' }} variant="secondary"  >Watch trailer</Button>
            </Link></div>

            <div className="Reactstars">
                <ReactStars
                    count={5}
                    value={el.rate}
                    size={24}
                    activeColor="#ffd700"
                /></div>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                <Button style={{ width: '120px', }} variant="danger" onClick={() => filter(el.id)} >Delete</Button>
            </div>

        </Card>

    )
}
export default MovieCard;