import React from 'react';

const JobCategory = ({ct}) => {
    const {id, logo, categoryName, availableJobs} = ct;
    return (
        <div className='p-10 border border-gray-400 rounded-lg text-start'>
            <img className='w-10 h-10 mb-8' src={logo} alt="" />
            <h5 className='text-xl font-extrabold text-[#474747] mb-2'>{categoryName}</h5>
            <p className='text-[#A3A3A3] font-medium text-base'>{availableJobs}</p>
        </div>
    );
};

export default JobCategory;