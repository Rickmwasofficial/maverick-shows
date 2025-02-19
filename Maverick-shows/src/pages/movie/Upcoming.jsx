import { getMovieUpcoming } from '../../data/api.js'
import ShowCard from '../../components/ShowCard'
import { useState, useEffect } from 'react'

function Upcoming() {
    let page = 1
    const [shows, setShows] = useState('')
    useEffect(() => {
        const getUpcoming = async () => {
            console.log('started upcoming')
            try {
                const movieData = await getMovieUpcoming()
                console.log(movieData.results)
                const data = movieData.results.slice(0, 10)
                let retrievedShows = data.map((show, index) => (
                    <ShowCard 
                        key={show.id}
                        {...show}
                        num={index}
                        media_type='movie'
                    />
                ))
                setShows(retrievedShows)
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        }
        getUpcoming()
    }, [page])
    return (
        <section className="block my-2 md:w-10/12 h-[auto] w-full align-middle justify-start p-2 md:mx-auto">
            <h1 className="font-work-sans">UPCOMING</h1>
            <hr className="bg-red-theme my-2 py-[0.6px] w-10/12" />
            {shows ? (  // If shows is available
                <div className="w-full max-md:text-center mx-auto inline-grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 my-2">
                    {shows}
                </div>
                ) : (
                <p className="text-center">Loading upcoming shows...</p>
                )}
        </section>
    )
}

export default Upcoming;