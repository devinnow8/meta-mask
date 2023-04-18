import React from "react";
import { Card, Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";
const TermsCard = () => {
  return (
    <section className="terms-card">
      <Container>
        <Row className="justify-content-center">
          <Col md={10} lg={6}>
            <Card>
              <h2 className="mb-3">Help us improve MetaMask</h2>
              <p>
                MetaMask would like to gather usage data to better understand
                how our users interact with MetaMask. This data will be used to
                provide the service, which includes improving the service based
                on your use.
              </p>
              <p>MetaMask will...</p>
              <ul>
                <li>
                  <img src="" alt="" />
                  Always allow you to opt-out via Settings
                </li>
                <li>
                  <img src="" alt="" />
                  Send anonymized click and pageview events
                </li>
                <li>
                  <img src="" alt="" />
                  Never collect information we don’t need to provide the service
                  (such as keys, addresses, transaction hashes, or balances)
                </li>
                <li>
                  <img src="" alt="" />
                  Never collect your full IP address*
                </li>
                <li>
                  <img src="" alt="" />
                  Never sell data. Ever!
                </li>
              </ul>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
                nostrum temporibus veritatis ad accusamus quis animi autem
                eveniet modi praesentium doloribus, hic saepe omnis alias
                eligendi non iste porro consequatur!
              </p>
              <div
                className="d-flex align-items-center mt-4"
                style={{ flexDirection: "column" }}
              >
                <Link to={"/login"} className="agree-btn mb-3 btn-1">
                  I agree
                </Link>
                <Link to={"/login"} className="no-btn">
                  No thanks
                </Link>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TermsCard;
