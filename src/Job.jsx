import React from 'react';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const Job = ({job}) => {

    const {
        id,
        companyLogo,
        jobTitle,
        companyName,
        remoteOrOnsite,
        fullTimePartTime,
        location,
        salary} = job;
    return (
        <div className='border border-gray-400 p-10 text-start'>
            <img className='w-40 h-16 mb-8' src={companyLogo} alt="" />
            <h1 className='font-extrabold text-2xl text-[#474747] mb-2'>{jobTitle}</h1>
            <p className='font-semibold text-xl text-[#757575] mb-4'>{companyName}</p>
            <span className='my-style mr-4'>{remoteOrOnsite}</span>
            <span className='my-style mb-4'>{fullTimePartTime}</span>
            <div className='flex flex-col md:flex-row justify-between mt-4'>
                <div className='flex gap-2'>
                    <MapPinIcon className="h-6 w-6 text-[#757575]" />
                    <p className='text-xl font-semibold text-[#757575]'> {location}</p>
                </div>
                <div className='flex gap-2'>
                    <CurrencyDollarIcon className="h-6 w-6 text-[#757575]" />
                    <p className='text-xl font-semibold text-[#757575]'>Salary: {salary}</p>
                </div>
            </div>
            <button className='my-btn px-4 mt-8 py-3 '><Link to={`/job/${id}`}>View Details</Link></button>
        </div>
    );
};

export default Job;