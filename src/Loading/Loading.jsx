import React from 'react';
import { FaSpinner } from 'react-icons/fa';

const Loading = () => {
    return (
        <div className='flex justify-center'>
            <FaSpinner className="animate-spin text-4xl text-[#0267af]" />
        </div>
    );
};

export default Loading;