import React from 'react';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const StoredJobs = ({jobInfo}) => {
    const {id, companyLogo, jobTitle, companyName, remoteOrOnsite, fullTimePartTime, location, salary} = jobInfo;
    return (
        <div className='border border-gray-400 p-8 mb-6 flex justify-between'>
            <div className='flex'>
                <div className='bg-[#F4F4F4] rounded-lg px-10 py-14 mr-8'>
                    <img className='w-40 h-12 my-auto' src={companyLogo} alt="" />
                </div>
                <div>
                    <h1 className='font-extrabold text-2xl text-[#474747] mb-2'>{jobTitle}</h1>
                    <p className='font-semibold text-xl text-[#757575] mb-4'>{companyName}</p>
                    <span className='my-style mr-4'>{remoteOrOnsite}</span>
                    <span className='my-style mb-4'>{fullTimePartTime}</span>
                    <div className='flex mt-4'>
                        <div className='flex gap-2 mr-6'>
                            <MapPinIcon className="h-6 w-6 text-[#757575]" />
                            <p className='text-xl font-semibold text-[#757575]'> {location}</p>
                        </div>
                        <div className='flex gap-2'>
                            <CurrencyDollarIcon className="h-6 w-6 text-[#757575]" />
                            <p className='text-xl font-semibold text-[#757575]'>Salary: {salary}</p>
                        </div>
                    </div>
                </div>
            </div>
            <button className='my-btn px-4 h-12 my-auto'><Link to={`/job/${id}`}>View Details</Link></button>
        </div>
    );
};

export default StoredJobs;