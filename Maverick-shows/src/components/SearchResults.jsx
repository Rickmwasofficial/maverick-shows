import { Link } from 'react-router-dom'

function SearchResults(props) {
    console.log('received')
    console.log(props)
    let link
    if (props.media_type == 'movie') {
        link = `https://maverick-shows.vercel.app/movies/${props.id}`
    } else if (props.media_type == 'tv') {
        link = `https://maverick-shows.vercel.app/tv/${props.id}`
    }

    let showInfo = () => {
        if (props.media_type == 'movie') {
            return (
                <>
                    <p className="date text-sm">{props.release_date}</p>
                    <p className='p-0 m-0 text-sm text-gray-300'>{props.media_type.toUpperCase()} | {props.vote_average} | {props.original_language.toUpperCase()}</p>
                </>
            )
        } else if (props.media_type == 'tv') {
            return (
                <>
                    <p className="date text-sm">{props.frst_air_date}</p>
                    <p className='p-0 m-0 text-sm text-gray-300'>{props.media_type.toUpperCase()} | {props.vote_average} | {props.original_language.toUpperCase()}</p>
                </>
            )
        } else {
            return null
        }
    }

    return (
        <>
            {props.poster_path ? <Link to={link}>
                <div className="entry-item flex mx-auto h-[auto] my-1 gap-2 items-center">
                    <div className="img w-3/12">
                        <img src={`https://image.tmdb.org/t/p/original${props.poster_path}`} alt="" />
                    </div>
                    <div className="details w-9/12">
                        <section className="loc">
                            <p className='font-bold text-md'>{props.original_title ? props.original_title : props.original_name}</p>
                        </section>
                        <section className="bottom">
                            {showInfo()}
                        </section>
                    </div>
                </div>
                <hr className="bg-red-theme my-2 py-[0.6px] w-full" />
            </Link> : ''}
        </>
    )
}

export default SearchResults;