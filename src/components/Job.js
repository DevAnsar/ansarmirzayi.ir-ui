import React from 'react';
import Image, {Shimmer} from 'react-shimmer';
import {Col  } from 'react-bootstrap';
import {myConfig} from '../config.js';
function Job({job}) {

    return (
        <>
            <Col sm={4}>

                <a className="custom-cart" target="_blank" href={job.url}
                   data-toggle="tooltip" data-placement="bottom"
                   title={`${job.title} - ${job.domain}`}>


                    <div className="custom-cart-image">
                        <Image
                            className="img-fluid"
                            src={myConfig.Base_URL+job.image}
                            fallback={<Shimmer />}
                        />
                    </div>
                    <div className="custom-cart-footer p-1">
                        <div className="mt-1">
                            <span>{job.title}</span>
                            <span style={{float: 'left'}}>{job.domain}</span>
                        </div>

                        <div className="text-left">
                                                <span className="text-small">
                                                    {job.description}
                                                </span>
                        </div>
                    </div>

                </a>

            </Col>
        </>
    )
}

export default Job;