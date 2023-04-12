import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import StoredJobs from './StoredJobs';

const AppliedJobs = () => {
    const {jobsInfo} = useLoaderData();
    const [jobType, setJobType] = useState(jobsInfo);

    const handleSelectJobType = (id) =>{
        if(id == "remote"){
            const remote = jobsInfo.filter(jobs => jobs.remoteOrOnsite === "Remote")
            setJobType(remote);
        }
        else{
            const onsite = jobsInfo.filter(jobs => jobs.remoteOrOnsite === "Onsite")
            setJobType(onsite);
        }
    }

    return (
        <div className='my-container mt-32'>
            <h1 className='font-extrabold text-3xl text-regalBlack text-center'>Applied Jobs</h1>
            <div className='flex justify-end gap-5 mt-32'>
                <button onClick={() => handleSelectJobType("remote")} className='border border-gray-400 px-2 text-base'>Remote</button>
                <button onClick={() =>handleSelectJobType("onsite")} className='border border-gray-400 px-2 text-base'>Onsite</button>
            </div>
            <div className='mt-8'>
                {
                    jobType.map(jobInfo => <StoredJobs
                        key={jobInfo.id}
                        jobInfo={jobInfo}
                    ></StoredJobs>)
            }
            </div>
        </div>
    );
};

export default AppliedJobs;