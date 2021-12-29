import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap'

function Details(props) {
    const find = props.movies.find(el => el.id == props.match.params.x)
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2 style={{ color: 'Highlight', textTransform: 'uppercase', margin: '20px' }}>{find.title}</h2>
            <p style={{ display: 'flex', width: '400px', flexWrap: 'wrap', alignItems: 'center', margin: '20px' }}>{find.description}</p>

            <iframe src={find.trailer} title={find.title} style={{ width: '600px', height: '420px', borderRadius: '20px' }} >    </iframe>
            <Link to='/'> <Button style={{ width: '200px', alignSelf: 'center', marginTop: '20px' }} variant="secondary"  >Return to home page</Button></Link>

        </div>
    )

}

export default Details;
