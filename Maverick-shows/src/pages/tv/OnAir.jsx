import { getTvonAir } from '../../data/api.js'
import ShowCard from '../../components/ShowCard.jsx'
import { useState, useEffect } from 'react'

function OnAir() {
    let page = 1
    const [shows, setShows] = useState('')
    useEffect(() => {
        const getUpcoming = async () => {
            console.log('started upcoming')
            try {
                const movieData = await getTvonAir()
                console.log(movieData.results)
                const data = movieData.results.slice(10, 20)
                let retrievedShows = data.map((show, index) => (
                    <ShowCard 
                        key={show.id}
                        {...show}
                        num={index}
                        media_type='tv'
                    />
                ))
                setShows(retrievedShows)
            } catch (error) {
                console.error('Error fetching Tv shows:', error);
            }
        }
        getUpcoming()
    }, [page])
    return (
        <section className="block my-2 md:w-10/12 h-[auto] w-full mt-12 align-middle justify-start p-2 md:mx-auto">
           
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

export default OnAir;