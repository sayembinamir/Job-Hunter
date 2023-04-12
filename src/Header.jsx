import React from 'react';
import ActiveLink from './ActiveLink';

const Header = () => {
    return (
        <div className='flex flex-col items-center justify-between my-container md:flex-row bg-gray-200 p-3'>
            <h1 className='text-2xl font-extrabold md:text-3xl text-regalBlack mb-4 md:mb-0'>JOB-HUNTER</h1>
            <nav className='flex flex-col gap-4 md:gap-10 text-base font-bold md:flex-row'>
                <ActiveLink to="/">Home</ActiveLink>
                <ActiveLink to="/statistics">Statistics</ActiveLink>
                <ActiveLink to="/appliedjobs">Applied Jobs</ActiveLink>
                <ActiveLink to="/blog">Blog</ActiveLink>
            </nav>
            <button className='my-btn px-7 py-5 mt-4 md:mt-0'>Start Applying</button>
        </div>
    );
};

export default Header;