import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='relative h-[100vh] w-[100vw]'>
            <img className='w-full h-full' src="https://e7.pngegg.com/pngimages/319/145/png-clipart-http-404-user-interface-design-design-purple-text.png" alt="" />
            <Link className='absolute py-2 px-2 rounded bg-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-green-700'>Back to home</Link>
        </div>
    );
};

export default Error;