import Data from '../../data/data.js'
import Play from '../../assets/play.png'
import Trailer from '../../assets/trailer.png'
import { useParams } from 'react-router-dom'

function Description() {
    const { id } = useParams()
    let num = id

    let image = `https://image.tmdb.org/t/p/original${Data.results[num].backdrop_path}`

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
                        <div className='outline outline-1 px-2 rounded-lg bg-transparent outline-red-theme'>Adventure</div>
                        <div className='outline outline-1 px-2 rounded-lg bg-transparent outline-red-theme'>Fantasy</div>
                        <div className='outline outline-1 px-2 rounded-lg bg-transparent outline-red-theme'>Action</div>
                    </div>
                    <h1 className='font-rubik text-4xl max-lg:text-3xl py-4 pb-0'>{Data.results[num].original_title}</h1>
                    {/* <p className='py-1 text-md max-md:text-sm'>CHADWICK BOSEMAN, MICHAEL B JORDAN, LUPITA NYONGO</p> */}
                    <p className='py-1 text-xs'>2 HRS 14 MINS <span className="font-bold text-3xl">.</span> {Data.results[num].release_date} <span className="font-bold text-3xl">.</span> {Data.results[num].original_language.toUpperCase()}</p>
                    <p className='py-2 text-md max-lg:text-xs text-gray-300'>{Data.results[num].overview}</p>
                    <div className="flex tags text-white w-8/12 max-sm:w-full max-sm:justify-around sm:gap-8 text-md py-3 font-light">
                        <button type="button" className="flex items-center gap-2 text-white bg-gradient-to-br from-red-500 to-red-theme hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Watch Now
                            <img src={Play} alt="play button icon" className='width-[16px] h-[16px]' />
                        </button>
                        <button type="button" className="flex items-center gap-2 text-white bg-gradient-to-br from-red-500 to-red-theme hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Trailer
                            <img src={Trailer} alt="play button icon" className='' />
                        </button>
                    </div>
                    <div className="flex w-full max-sm:justify-around sm:gap-12 py-1">
                        <p className='font-joti font-bold text-2xl gap-0'>{Data.results[num].vote_average} <br/><span className="text-xs font-normal my-0">Rating</span></p> 
                        <p className='font-joti font bold text-2xl'>{Data.results[num].vote_count} <br/><span className="text-xs font-normal">Votes</span></p>
                    </div>
                </div>
            </div>
            <div className='bg-gradient-to-r hidden sm:block md:w-4/12 from-transparent to-black'></div>
        </section>
        <div className="w-11/12 md:w-9/12 mx-auto">
            <h1 className="font-work-sans font-bold pt-3">TRAILER</h1>
            <hr className="bg-red-theme my-2 py-[0.6px] w-10/12" />
            <iframe
                className='w-full aspect-video p-2 mx-auto'
                src={`https://www.youtube.com/embed/d6V61TtFdiw`}
                title="Movie Trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
        </>

    )
}

export default Description;