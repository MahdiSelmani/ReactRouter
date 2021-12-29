import ReactStars from "react-rating-stars-component";

function Filter({ setWord, setRating }) {

    const ratingChanged = (newRating) => {
        setRating(newRating);
    };

    return (
        <div style={{ marginTop: '50px' }}>
            <h3 style={{ textAlign: 'center' }}>Quick search</h3>
            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <div>
                    <label style={{ fontSize: 'x-large' }} >Title</label>
                    <input style={{ borderRadius: '10px', marginLeft: '10px' }} type='text' onChange={(event) => setWord(event.target.value)}></input>
                </div>
                <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    activeColor="#ffd700"
                />
            </div>
            <div>
            </div>



        </div>
    )
}
export default Filter;





