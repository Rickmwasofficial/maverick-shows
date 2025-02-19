import { Link } from 'react-router-dom'

function ShowCard(props) {
    console.log(props)
    let link
    if (props.media_type == 'movie') {
        link = `https://maverick-shows.vercel.app/movies/${props.id}`
    } else if (props.media_type == 'tv') {
        link = `https://maverick-shows.vercel.app/tv/${props.id}`
    }
    return (
        <Link to={link}>
            <div className="w-full block h-80 max-md:h-[25rem] my-2 justify-center max-md:mx-auto">
                <div className='w-10/12 h-[80%] max-md:w-9/12 md:mb-[5%] bg-blend-darken bg-cover flex-start max-md:mx-auto bg-center bg-no-repeat' style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original${props.poster_path})` 
                }}></div>
                <div className='w-10/12 max-md:w-full md:mt-[5%] block h-[10%] flex-end'>
                    <p className='p-0 m-0 text-sm font-bold font-work-sans truncate'>{props.original_title ? props.original_title: props.name}</p>
                    <p className='p-0 m-0 text-sm text-gray-300'>{props.media_type.toUpperCase()} | {props.vote_average} | {props.original_language.toUpperCase()}</p>
                </div>
            </div>
        </Link>
    )
}

export default ShowCard;