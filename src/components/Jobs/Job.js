import React from "react";
import { Shimmer, Image } from "react-shimmer";
import { Col } from "react-bootstrap";
import { myConfig } from "../../config.js";
function Job({ job }) {
  return (
    <>
      <Col sm={4}>
        <a
          className="custom-cart"
          target="_blank"
          href={job.url}
          data-toggle="tooltip"
          data-placement="bottom"
          rel="noreferrer"
          title={`${job.title} - ${job.domain}`}
        >
          <div className="custom-cart-image">
            <Image
              className="img-fluid"
              src={myConfig.Base_URL + job.image}
              fallback={<Shimmer height={170} />}
            />
          </div>
          <div className="custom-cart-footer p-1">
            <div className="mt-1 text-xmedium">{job.title}</div>

            <div className=" text-small">{job.domain}</div>

            <div className="mt-1 text-left text-medium text-secondary">
              {job.description}
            </div>
          </div>
        </a>
      </Col>
    </>
  );
}

export default Job;
