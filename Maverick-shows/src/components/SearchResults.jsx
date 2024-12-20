import { Link } from 'react-router-dom'

function SearchResults(props) {
    console.log('received')
    console.log(props)
    let link
    if (props.media_type == 'movie') {
        link = `http://localhost:5174/movies/${props.id}`
    } else if (props.media_type == 'tv') {
        link = `http://localhost:5174/tv/${props.id}`
    }

    return (
        <Link to={link}>
            <div className="entry-item">
                <div className="img">
                    <img src={`https://image.tmdb.org/t/p/original${props.poster_path}`} alt="" />
                </div>
                <div className="details">
                    
                    <section className="loc">
                        <h1>{details.original_title ? details.original_title : details.original_name}</h1>
                    </section>
                    <section className="bottom">
                        <p className="date">{props.release_date}</p>
                        {/* <p className="desc">{props.text}</p> */}
                    </section>
                </div>
            </div>
            
        </Link>
    )
}

export default SearchResults;