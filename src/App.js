import './App.css';
import Filter from './components/Filter';
import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';
import { useState } from 'react';
import { Route } from 'react-router-dom';
import Details from './components/Details';

function App() {

  const [movies, setMovies] = useState([
    {
      id: 0,
      title: "peaky blinders",
      photo: "//pbs.twimg.com/media/ETAoYTMXgAA01qD.jpg",
      rate: 4,
      description:
        "A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.",
      trailer: "https://www.youtube.com/embed/oVzVdvGIC7U"
    },
    {
      id: 1,
      title: "Game of thrones",
      photo:
        "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2015%2F11%2Fjs20-20tease.jpeg",
      rate: 4.7,
      description:
        "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
      trailer: "https://www.youtube.com/embed/gcTkNV5Vg1E"

    },
    {
      id: 2,
      title: "The good doctor",
      photo: "https://pbs.twimg.com/media/EbNkkiTXsAc2o3Y.jpg",
      rate: 5,
      description:
        "Shaun Murphy, a young surgeon with autism and Savant syndrome, is recruited into the surgical unit of a prestigious hospital.",
      trailer: "https://www.youtube.com/embed/msJggy8xtmI"

    },
    {
      id: 3,
      title: "Breaking bad",
      photo:
        "https://image.tmdb.org/t/p/original/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
      rate: 3.5,
      description:
        "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
      trailer: "https://www.youtube.com/embed/lrcqbavlbyQ"

    }])
  const [rating, setRating] = useState(0);
  const [word, setWord] = useState('');
  return (

    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
      <Route exact path={'/'}>
        <AddMovie movies={movies} setMovies={setMovies} />
        <Filter setWord={setWord} setRating={setRating} />
        <MovieList movies={movies} rating={rating} word={word} setMovies={setMovies} />
      </Route>
      <Route path='/Details/:x' render={(props) => <Details movies={movies} {...props} ></Details>} ></Route>
    </div>
  );
}

export default App;
