import Data from '../../data/data.js'
import ShowCard from '../../components/ShowCard'

function Upcoming() {
    const data = Data.results.slice(10, 20)
    let shows = data.map((show, index) => (
        <ShowCard 
            key={show.original_title}
            {...show}
            id={index + 10}
        />
    ))
    return (
        <section className="block my-2 md:w-10/12 h-[auto] w-full align-middle justify-start p-2 md:mx-auto">
            <h1 className="font-work-sans">UPCOMING</h1>
            <hr className="bg-red-theme my-2 py-[0.6px] w-10/12" />
            <div className="w-full mx-auto inline-grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 my-2">
                {shows}
            </div>
        </section>
    )
}

export default Upcoming;