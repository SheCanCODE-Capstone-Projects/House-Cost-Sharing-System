import React from 'react';
import { Link } from 'react-router-dom';
import logonge from '../assets/logonge.png';

const Header2 = () => {
    return (
        <header className='py-6 mb-5 border-b ml-10 mr-10'>
            <div className='container mx-auto flex justify-between items-center'>
                <Link to='/'><img src={logonge} alt='logo' /></Link>
                <div className='flex items-center gap-6'>
                    <Link className='hover:text-yellow-500 text-white transition' to='/'>Home</Link>
                    <Link className='hover:text-yellow-500 text-white transition' to='/about'>About Us</Link>
                    <div className='relative'>
                        <div className="h-16 w-16 rounded-full flex items-center justify-center border border-yellow-500 text-yellow-500 text-xl">Profile</div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header2;
