import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import StoredJobs from './StoredJobs';

const AppliedJobs = () => {
    const {jobsInfo} = useLoaderData();
    const [storeJob, setStoreJob] = useState(jobsInfo);

    const handleSelectJob = (id) =>{
        console.log(id);
    }

    return (
        <div className='my-container mt-32'>
            <h1 className='font-extrabold text-3xl text-regalBlack text-center'>Applied Jobs</h1>
            <div className='flex justify-end gap-5 mt-32'>
                <button onClick={handleSelectJob} className='border border-gray-400 px-2 text-base'>Remote</button>
                <button onClick={handleSelectJob} className='border border-gray-400 px-2 text-base'>Onsite</button>
            </div>
            <div className='mt-8'>
                {
                    jobsInfo.map(jobInfo => <StoredJobs
                        key={jobInfo.id}
                        jobInfo={jobInfo}
                    ></StoredJobs>)
            }
            </div>
        </div>
    );
};

export default AppliedJobs;