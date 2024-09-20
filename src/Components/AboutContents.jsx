import Link from 'next/link';
import React from 'react';

const AboutContents = () => {
    return (
        <div className='flex flex-col text-red-500'>
            <Link href={"/about/history"} className='font-semibold'>History</Link>
            <Link href={"/about/mission"} className='font-semibold'>Mission</Link>
        </div>
    );
};

export default AboutContents;