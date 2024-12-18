import Search from '../assets/search.svg?url'
import Profile from '../assets/profile.svg?url'
import Hamburger from '../assets/hamburger.svg?url'
import CloseHamburger from '../assets/closehamburger.svg?url'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {
    const [hamburgerIcon, setHamburgerIcon] = useState('true')
    const [inputEl, setInputEl] = useState('true')

    function toggleHumburger() {
        setHamburgerIcon(prevHamburger => !prevHamburger)
    }
    let searchStyle = 'hidden md:flex md:block md:justify-end gap-4 align-middle'

    function toggleInput() {
        setInputEl(prevInput => !prevInput)
        searchStyle = prevInput ? 'hidden md:flex md:block md:justify-around' : 'hidden md:flex md:block md:justify-end gap-4 align-middle'
    }

    return (
        <header className='flex w-full text-nowrap absolute font-bold text-white font-work-sans bg-black justify-center'>
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
                    {inputEl ? <input type="text" name="searchInput" className='text-black font-light px-[4px] border-r-2 outline-red-theme' /> : undefined}

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