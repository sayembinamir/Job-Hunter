import React,{ useEffect, useState } from 'react';
import banner from './assets/All Images/banner.png';
import JobCategory from './JobCategory';
import { useLoaderData } from "react-router-dom";
import Job from './Job';

const Home = () =>
{
    const category = useLoaderData();
    const [jobs, setJobs] = useState([]);
    const [showAll, setShowAll] = useState(false);

    const handleShowAll = () =>{
        setShowAll(true);
    }
    
    useEffect(() => {
        fetch('/jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data));
    }, [])

    return (
        <div className='mt-10 my-container'>
            <div className='grid items-center grid-cols-1 md:grid-cols-2'>
                <div>
                    <h1 className='mb-6 text-3xl font-extrabold md:text-7xl text-regalBlack'>One Step <br /> Closer To Your <br /> <span className='text-blue-400'>Dream Job</span></h1>
                    <p className='text-lg font-medium text-[#757575] mb-8'>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                    <button className='my-btn px-7 py-5 mb-4 md:mb-0'>Get Started</button>
                </div>
                <img className='' src={banner} alt="" />
            </div>
            {/* Section: Job Category List*/}
            <div className='mt-32 text-center'>
                <h1 className='mb-4 text-2xl font-extrabold md:text-5xl text-regalBlack'>Job Category List</h1>
                <p className='mb-8 text-base font-medium text-[#757575]'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='grid grid-cols-1 gap-6 md:grid-cols-4'>
                    {category.map(ct => <JobCategory
                        key={ct.id}
                        ct={ct}
                    ></JobCategory>)}
                </div>
            </div>
            {/* Section: Featured Jobs */}
            <div className='mt-32 text-center'>
                <h1 className='mb-4 text-2xl font-extrabold md:text-5xl text-regalBlack'>Featured Jobs</h1>
                <p className='text-base font-medium text-[#757575] mb-8'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {
                        jobs.slice(0, showAll ? 6 : 4).map(job => <Job
                            key={job.id}
                            job={job}
                        ></Job>)
                    }
                </div>
                {!showAll &&
                    <span onClick={handleShowAll}>
                        {
                            <button className='my-btn px-7 my-3 py-5 '>See All Jobs</button>
                        }
                    </span>
                }
            </div>
        </div>
    );
};

export default Home;