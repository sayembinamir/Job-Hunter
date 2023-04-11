import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Statistics = () => {

    const assignmentMarks = [
        { id: 1, name: "A-1", marks: 60 },
        { id: 2, name: "A-2", marks: 60 },
        { id: 3, name: "A-3", marks: 60 },
        { id: 4, name: "A-4", marks: 60 },
        { id: 5, name: "A-5", marks: 60 },
        { id: 6, name: "A-6", marks: 60 },
        { id: 7, name: "A-7", marks: 60 }
    ];

    return (
        <div className='my-container mt-8'>
            <h1 className='mb-4 text-2xl md:text-4xl font-bold text-regalBlack text-center'>Assignment Analytics</h1>
            <AreaChart
                className='mx-auto'
                width={700}
                height={400}
                data={assignmentMarks}
            >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="marks" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
        </div>
    );
};

export default Statistics;