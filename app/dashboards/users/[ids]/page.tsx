import React from 'react';

interface PageProps {
    params: Promise<{ ids: string }>;
}

const Page = async ({ params }: PageProps) => {
    const { ids } = await params;
    return(
            <h1 className='text-3xl'>Details for user ID: {ids}</h1>
    )
}
export default Page;