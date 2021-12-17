import React from 'react';
import {Job} from './index';
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