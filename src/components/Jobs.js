import React from 'react';
import Job from './Job';
function Jobs({jobs}) {
    return (
        <>
            {
                jobs.map((job, index) => <Job key={index} job={job}/>)
            }
        </>
    )
}
export default Jobs;