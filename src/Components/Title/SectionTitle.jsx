import React from 'react';

const SectionTitle = ({heading}) => {
    return (
        <div className='w-full'>
            <div className="flex justify-center py-3 ">
                <p className='text-orange-500 text-2xl'>{heading}</p>
            </div>
        </div>
    );
};

export default SectionTitle;