import React from 'react';

const Page = ({ params }: { params: { ids: string } }) => {
    const { ids } = params;
    return(
            <h1 className='text-3xl'>Details for user ID: {ids}</h1>
    )
}
export default Page;