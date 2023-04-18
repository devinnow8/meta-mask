import React from "react";
import { Card, Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";

const LoginCard = () => {
  return (
    <section className="home-card">
      <Container>
        <Row className="justify-content-center">
          <Col md={6} lg={6}>
            <Card>
              Login Card
              <div
                className="d-flex align-items-center"
                style={{ flexDirection: "column" }}
              >
                <Link to={"/login"} className="mb-3 btn-1">
                  Create a new wallet
                </Link>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LoginCard;
