import Search from '../assets/search.svg?url'
import Profile from '../assets/profile.svg?url'
import Hamburger from '../assets/hamburger.svg?url'
import CloseHamburger from '../assets/closehamburger.svg?url'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getSearchResults } from '../data/api'
import SearchResults from './SearchResults'

function Navbar() {
    const [hamburgerIcon, setHamburgerIcon] = useState('true')
    const [inputEl, setInputEl] = useState('')
    const [query, setQuery] = useState('')
    const [results, setResults] = useState('')

    const handleSearch = async () => {
        if (!query) return; // Avoid empty searches
        setResults('')
        try {
            console.log(query);
            const data = await getSearchResults(query);
            if (data && data.results) { // Check if data and results exist
                setResults(data.results.map((show, index) => (
                    <SearchResults key={show.original_title || show.id} {...show} num={index} />
                )));
            } else {
                console.log('No search results found');
            }
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
    };

    function toggleHumburger() {
        setHamburgerIcon(prevHamburger => !prevHamburger)
    }
    let searchStyle = 'hidden md:flex md:block md:justify-end gap-4 align-middle'

    function toggleInput() {
        setInputEl(prevInput => !prevInput)
        setResults('')
        searchStyle = !inputEl ? 'hidden md:flex md:block md:justify-around' : 'hidden md:flex md:block md:justify-end gap-4 align-middle'
    }

    return (
        <header className='flex w-full text-nowrap absolute font-bold m-0 text-white font-work-sans justify-center'>
            <nav className='flex md:w-11/12 w-full align-middle p-5 justify-between'>
                <div className="flex text-nowrap w-8/12 gap-12 mr-24">
                    <p className='mr-10 font-rubik text-nowrap'>LUTHOR SHOWS</p>
                    <ul className='hidden md:flex md:gap-12 md:ml-22'>
                        <li><Link to='/'>HO<span className='text-red-theme'>ME</span></Link></li>
                        <li><Link to='movies'>MOVIES</Link></li>
                        <li><Link to='tv'>TV</Link></li>
                    </ul>
                </div>
                <div className={searchStyle}>
                    <button type="button" onClick={toggleInput}>
                        <img src={Search} alt="search icon" width={'20px'} />
                    </button>
                    {inputEl ? 
                        <div className="block gap-2">
                            <input type="text" name="searchInput" value={query}
        onChange={(e) => setQuery(e.target.value)} onKeyDown={e => {
            if (e.key === 'Enter') {
                handleSearch()
            }
        }} className='text-black font-light px-[4px] border-r-2 outline-red-theme' />
                            <div className='block gap-2 bg-yellow-50 text-black p-1 mt-[14px] overflow-scroll absolute z-11 max-h-96 w-auto mr-6'>
                                {results}
                            </div>
                        </div>
                    : undefined}

                    <img src={Profile} alt="profile icon" width={'20px'} />
                </div>
                <div className='w-1/12 md:hidden justify-end'>
                    <button type="button" onClick={toggleHumburger}>
                        {hamburgerIcon ? <img src={Hamburger} alt="hamburger icon" width={'20px'} /> : <img src={CloseHamburger} alt="hamburger icon" width={'20px'}  />}
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;