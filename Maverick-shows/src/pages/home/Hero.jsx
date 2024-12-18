import Data from '../../data/data.js'

function Hero() {
    let num = 0

    let image = `https://image.tmdb.org/t/p/original${Data.results[num].backdrop_path}`

    return (
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
          `}
          style={{
            backgroundImage: `url(${image})` 
        }}
        >
            <div className='flex bg-gradient-to-r w-8/12 from-black to-transparent items-center'>
                <div className="inline-block text-white md:w-7/12 w-full h-[auto] items-center max-md:text-center justify-center md:mx-auto my-auto pt-8">
                    <div className="flex tags text-white md:w-8/12 w-full gap-8 text-md">
                        <div className='outline outline-1 px-2 rounded-lg bg-transparent outline-red-theme'>Adventure</div>
                        <div className='outline outline-1 px-2 rounded-lg bg-transparent outline-red-theme'>Fantasy</div>
                        <div className='outline outline-1 px-2 rounded-lg bg-transparent outline-red-theme'>Action</div>
                    </div>
                    <h1 className='font-rubik text-5xl py-2 pt-3'>{Data.results[num].original_title}</h1>
                    <p className='py-1 text-lg'>CHADWICK BOSEMAN, MICHAEL B JORDAN, LUPITA NYONGO</p>
                    <p className='py-1 text-sm'>2 HRS 14 MINS . {Data.results[num].release_date} . {Data.results[num].original_language.toUpperCase()}</p>
                    <p className='py-2 text-md'>{Data.results[num].overview}</p>
                    <div className="flex tags text-white w-8/12 gap-8 text-md py-3 font-light">
                        <button className="bg-red-theme rounded-md px-4 py-1">Trailer</button>
                        <button className="bg-red-theme rounded-md px-3 py-1">Watch Now</button>
                    </div>
                </div>
            </div>
            <div className='bg-gradient-to-r w-4/12 from-transparent to-black'></div>


        </section>
    )
}

export default Hero;