import React from "react";
import { Col, Row } from "react-bootstrap";
export default function Footer() {
  return (
    <Col xs={12} className="B mt-1">
      <Row>
        <Col xs={12} className="3">
          <div className="footer border-top">
            <ul className={`footer-list pt-3 mb-2`}>
              <li className=" mr-4">
                <a
                  href="tel:09306029572"
                  rel="noreferrer"
                  title="09306029572"
                  target="_blank"
                  className="balance"
                >
                  <img
                    alt="تماس تلفنی"
                    className="footer-icons"
                    src="./img/icons/phone-call.svg"
                  />
                  <span className="d-none d-md-block pl-2">تماس تلفنی</span>
                </a>
              </li>
              <li className=" mr-4">
                <a
                  href="mailto:ansarmirzayi@gmail.com"
                  title="ansarmirzayi@gmail.com"
                  className="balance"
                >
                  <img
                    alt="ارسال ایمیل"
                    className="footer-icons"
                    src="./img/icons/email.svg"
                  />
                  <span className="d-none d-md-block pl-2">ارسال ایمیل</span>
                </a>
              </li>
              <li className=" mr-4">
                <a
                  rel="noreferrer"
                  href="https://t.me/dev_ansar"
                  title="https://t.me/dev_ansar"
                  target="_blank"
                  className="balance"
                >
                  <img
                    alt="تلگرام"
                    className="footer-icons"
                    src="./img/icons/telegram.svg"
                  />
                  <span className="d-none d-md-block pl-2">تلگرام</span>
                </a>
              </li>
              <li className=" ml-md-4 ml-0" style={{ float: "left" }}>
                <a
                  rel="noreferrer"
                  href="http://ansarmirzayi.ir"
                  target="_blank"
                  className="balance text-white text-medium"
                >
                  ansarmirzayi.ir
                </a>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Col>
  );
}
