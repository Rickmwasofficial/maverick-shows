import Search from '../assets/search.svg?url'
import Profile from '../assets/profile.svg?url'
import Hamburger from '../assets/hamburger.svg?url'
import CloseHamburger from '../assets/closehamburger.svg?url'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getSearchResults } from '../data/api'
import SearchResults from './SearchResults'
import closeHamburger from '../assets/closehamburger.svg?url'

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
        setResults('')
    }
    let searchStyle = 'hidden md:flex md:block md:justify-end gap-4 align-middle'
    function toggleInput() {
        setInputEl(prevInput => !prevInput)
        setResults('')
        searchStyle = !inputEl ? 'hidden md:flex md:block md:justify-between' : 'hidden md:flex md:block md:justify-end gap-4 align-middle'
    }

    return (
        <header className={`block w-full text-nowrap font-bold m-0 text-white font-work-sans absolute justify-center ${hamburgerIcon ? 'absolute' : 'bg-black md:relative'}`}>
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
                        <img src={inputEl ? closeHamburger : Search} alt="search icon" width={'20px'} />
                    </button>
                    {inputEl ? 
                        <div className="block gap-2 w-10/12">
                            <input type="text" name="searchInput" autoComplete='off'
        onChange={(e) => setQuery(e.target.value)} onKeyDown={e => {
            if (e.key === 'Enter') {
                handleSearch()
            }
            handleSearch()
        }} className='text-black font-light px-[4px] border-r-2 outline-red-theme' />
                            {results ? <div className='block gap-2 bg-yellow-50 text-black p-1 mt-[14px] overflow-scroll absolute z-11 max-h-96 w-auto mr-6'>
                                {results}
                            </div> : ''}
                        </div>
                    : undefined}
                </div>
                <div className='w-1/12 md:hidden justify-end'>
                    <button type="button" onClick={toggleHumburger}>
                        {hamburgerIcon ? <img src={Hamburger} alt="hamburger icon" width={'20px'} /> : <img src={CloseHamburger} alt="hamburger icon" width={'20px'}  />}
                    </button>
                </div>
            </nav>
            {hamburgerIcon ? '' : 
                <div className="w-full md:hidden mx-auto bg-black max-md:block gap-4 text-white">
                    <div className="w-[auto] py-2">
                        <ul className='flex justify-around md:gap-12 md:ml-22'>
                            <li><Link to='/'>HO<span className='text-red-theme'>ME</span></Link></li>
                            <li><Link to='movies'>MOVIES</Link></li>
                            <li><Link to='tv'>TV</Link></li>
                        </ul>
                    </div>
                    <div className="w-full py-2 flex justify-around mx-auto">
                        {/* <button type="button" onClick={handleSearch} className="w-2/12">
                                <img src={inputEl ? closeHamburger : Search} alt="search icon" width={'20px'} />
                        </button> */}
                        <div className="block gap-2 w-10/12">
                                    <input type="text" name="searchInput" placeholder='search movies' autoComplete='off'
                onChange={(e) => setQuery(e.target.value)} onKeyDown={e => {
                    if (e.key === 'Enter') {
                        handleSearch()
                    }
                    handleSearch()
                }} className='text-black font-light w-full px-[4px] border-r-2 outline-red-theme' />
                                    {results ? <div className='block gap-2 bg-yellow-50 text-black p-1 mt-[14px] overflow-y-scroll absolute z-11 max-h-96 w-10/12 mr-6'>
                                        {results}
                                    </div> : ''}
                                </div>
                    </div>
                </div>}
        </header>
    )
}

export default Navbar;