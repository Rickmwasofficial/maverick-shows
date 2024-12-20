function ShowCard(props) {
    console.log(props)
    return (
        <div className="w-full block h-80 my-2 justify-center">
            <div className='w-10/12 h-[80%] mb-[5%] bg-blend-darken bg-cover flex-start bg-center bg-no-repeat' style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${props.poster_path})` 
            }}></div>
            <div className='w-10/12 mt-[5%] block h-[10%] flex-end'>
                <p className='p-0 m-0 text-sm font-bold font-work-sans'>{props.original_title}</p>
                <p className='p-0 m-0 text-sm text-gray-300'>129 Mins | {props.vote_average}</p>
            </div>
        </div>
    )
}

export default ShowCard;