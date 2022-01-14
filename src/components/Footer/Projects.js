import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <Col xs={12} className="B mt-1">
      <Row>
        <Col xs={12} className="3">
          <div className="mt-1">
            <ul className={`footer-list mt-1 mb-2`}>

              <li className=" mr-4">
                <Link to="/am-card-memory-game">
                  <span className="d-none d-md-block pl-2">
                    1.
                    بازی کارت حافظه
                  </span>
                </Link>
              </li>

              
              <li className=" mr-4">
                <Link to="/am-card-memory-game">
                  <span className="d-none d-md-block pl-2">
                    2.
                    تبدیل واحد
                  </span>
                </Link>
              </li>


            </ul>
          </div>
        </Col>
      </Row>
    </Col>
  );
}
