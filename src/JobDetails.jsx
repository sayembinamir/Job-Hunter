import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { CurrencyDollarIcon, CalendarIcon, PhoneIcon, InboxIcon, MapPinIcon } from '@heroicons/react/24/solid'
import { addToDb } from './utilities/fakedb';

const JobDetails = () => {
    const dynamic = useParams();
    const jobs = useLoaderData();
    const exists = jobs.find(job => job.id === dynamic.id);

    const handleApply = id =>{
        addToDb(id)
    }

    return (
        <div className='my-container my-32'>
            <h1 className='text-2xl md:text-3xl font-extrabold text-regalBlack text-center'>Job Details</h1>
            <div className='mt-32 grid grid-cols-1 md:grid-cols-3 gap-10'>
                <div className='col-span-2'>
                    <h3 className='my-h3 mb-6'>Job Description: <span className='my-span'>{exists.jobDescription}</span></h3>
                    <h3 className='my-h3 mb-6'>Job Responsibility: <span className='my-span'>{exists.jobResponsibility}</span></h3>
                    <h3 className='my-h3 mb-4'>Educational Requirements:</h3>
                    <p className='my-span text-base mb-6'>{exists.educationalRequirements}</p>
                    <h3 className='my-h3 mb-4'>Experiences:</h3>
                    <p className='my-span text-base'>{exists.Experiences}</p>
                </div>
                <dir className="col-span-1">
                    <div className='bg-gray-200 p-7 rounded-lg'>
                        <h3 className='font-extrabold text-xl text-regalBlack'>Job Details</h3>
                        <hr className='my-hr' />
                        <div className='flex'>
                            <CurrencyDollarIcon className="h-6 w-6 text-blue-400 mr-2" />
                            <h5 className='my-h5 mb-4'>Salary : <span className='my-span'>{exists.salary} (Per Month)</span></h5>
                        </div>
                        <div className='flex'>
                            <CalendarIcon className="h-6 w-6 text-blue-400 mr-2" />
                            <h5 className='my-h5 mb-4'>Job Title : <span className='my-span'>{exists.jobTitle}</span></h5>
                        </div>
                        {/* Contact Information */}
                        <h3 className='font-extrabold text-xl text-regalBlack mt-8'>Contact Information</h3>
                        <hr className='my-hr' />
                        <div className='flex'>
                            <PhoneIcon className="h-6 w-6 text-blue-400 mr-2" />
                            <h5 className='my-h5 mb-4'>Phone : <span className='my-span'>{exists.phone}</span></h5>
                        </div>
                        <div className='flex'>
                            <InboxIcon className="h-6 w-6 text-blue-400 mr-2" />
                            <h5 className='my-h5 mb-4'>Email : <span className='my-span'>{exists.email}</span></h5>
                        </div>
                        <div className='flex'>
                            <MapPinIcon className="h-6 w-6 text-blue-400 mr-2" />
                            <h5 className='my-h5'>Address : <span className='my-span'>{exists.address}</span></h5>
                        </div>
                    </div>
                    <button  onClick={() =>handleApply(dynamic.id)} className='my-btn w-full mt-6 py-5'>Apply Now</button>
                </dir>
            </div>
        </div>
    );
};

export default JobDetails;