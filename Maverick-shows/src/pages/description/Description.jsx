import Data from '../../data/data.js'
import { getMovieTrailer, getDetails, getTvTrailer, getTvCredits, getMovieCredits } from '../../data/api.js'
import Play from '../../assets/play.png'
import Trailer from '../../assets/trailer.png'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Description() {
    const { str, id } = useParams()
    const [details, setDetails] = useState('')
    const [trailer, setTrailer] = useState('')
    let num = 0
    useEffect(() => {
        const fetchDetails = async () => {
            // console.log('started');
            try {
                if (str == 'movies') {
                    console.log('started movie')
                    const key = await getDetails('movie', id)
                    
                    setDetails(key)
                } else {
                    const key = await getDetails('tv', id);
                    setDetails(key)
                }
                
            } catch (error) {
                console.error('Error fetching details:', error);
            }
        };
    
        fetchDetails();
    }, [id]);
    console.log(details)
    useEffect(() => {
        const fetchTrailer = async () => {
            // console.log('started');
            try {
                const getKey = () => {
                    if (str == 'movies') {
                        return getMovieTrailer(id)
                    } else if (str == 'tv') {
                        return getTvTrailer(id)
                    }
                }
                const key = await getKey()
                
                const trailerData = key.results.find(video => video.type === 'Trailer'); // Find the trailer object
                if (trailerData) {
                    setTrailer(  // Assuming you have a state setter function called setTrailer
                        <iframe
                            className='w-full aspect-video p-2 mx-auto'
                            src={`https://www.youtube.com/embed/${trailerData.key}`}
                            title="Movie Trailer"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    );
                } else {
                    setTrailer(null); // Set to null if no trailer found
                }
            } catch (error) {
                console.error('Error fetching trailer:', error);
            }
        };
    
        fetchTrailer();
    }, [id]);

    document.title = details.original_title ? details.original_title : details.original_name

    let showInfo = () => {
        if (str == 'movies') {
            return (
                <p className='py-1 text-xs'>{details.runtime} Mins <span className="font-bold text-3xl">.</span> {details.release_date} <span className="font-bold text-3xl">.</span> {details.origin_country}</p>
            )
        } else if (str == 'tv') {
            return (
                <p className='py-1 text-xs'>{details.number_of_seasons ? details.number_of_seasons : undefined} Seasons <span className="font-bold text-3xl">.</span> {details.episode_run_time ? details.episode_run_time : null} Mins <span className="font-bold text-3xl">.</span> {details.first_air_date ? details.first_air_date : undefined} <span className="font-bold text-3xl">.</span> {details.origin_country}</p>
            )
        } else {
            return null
        }
    }


    let image = `https://image.tmdb.org/t/p/original${details.backdrop_path}`

    return (
        <>
            <section className={`
            bg-cover 
            bg-center 
            bg-no-repeat 
            h-[600px] 
            md:w-11/12 w-full
            flex
            align-middle
            justify-center
            md:mx-auto
            bg-blend-darken
            mx-0
          `}
          style={{
            backgroundImage: `url(${image})` 
        }}
        >
            <div className='flex bg-gradient-to-r w-full md:w-8/12 from-black to-transparent items-center'>
                <div className="inline-block text-white max-sm:text-center w-8/12 max-md:w-11/12 h-[auto] justify-center mx-auto my-auto pt-10">
                    <div className="flex tags text-white sm:w-8/12 w-full max-sm:justify-around sm:gap-8 text-sm">
                        <div className='outline outline-1 px-2 rounded-lg bg-transparent outline-red-theme'>{details.genres ? details.genres['0'] ? details.genres['0'].name : '' : ''}</div>
                        <div className='outline outline-1 px-2 rounded-lg bg-transparent outline-red-theme'>{details.genres ? details.genres['1'] ? details.genres['1'].name : '' : ''}</div>
                        <div className='outline outline-1 px-2 rounded-lg bg-transparent outline-red-theme'>{details.genres ? details.genres['2'] ? details.genres['2'].name : '' : ''}</div>
                    </div>
                    <h1 className='font-rubik text-4xl max-lg:text-3xl py-4 pb-0'>{details.original_title ? details.original_title : details.original_name}</h1>
                    {/* <p className='pt-2 text-wrap text-sm max-md:text-xs truncate'>{credits}</p> */}
                    {showInfo()}
                    <p className='py-2 text-md max-lg:text-xs text-gray-300'>{details.overview}</p>
                    <div className="flex tags text-white w-8/12 max-sm:w-full max-sm:justify-around sm:gap-8 text-md py-3 font-light">
                        <button type="button" className="flex items-center gap-2 text-white bg-gradient-to-br from-red-500 to-red-theme hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Watch Now
                            <img src={Play} alt="play button icon" className='width-[16px] h-[16px]' />
                        </button>
                        <button type="button" className="flex items-center gap-2 text-white bg-gradient-to-br from-red-500 to-red-theme hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Trailer
                            <img src={Trailer} alt="play button icon" className='' />
                        </button>
                    </div>
                    <div className="flex w-full max-sm:justify-around sm:gap-12 py-1">
                        <p className='font-joti font-bold text-2xl gap-0'>{details.vote_average} <br/><span className="text-xs font-normal my-0">Rating</span></p> 
                        <p className='font-joti font bold text-2xl'>{details.vote_count} <br/><span className="text-xs font-normal">Votes</span></p>
                    </div>
                </div>
            </div>
            <div className='bg-gradient-to-r hidden sm:block md:w-4/12 from-transparent to-black'></div>
        </section>
        <div className="w-11/12 md:w-9/12 mx-auto">
            <h1 className="font-work-sans font-bold pt-3">TRAILER</h1>
            <hr className="bg-red-theme my-2 py-[0.6px] w-10/12" />
            {trailer}
        </div>
        </>

    )
}

export default Description;