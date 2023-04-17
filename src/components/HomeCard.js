import React from "react";
import { Button, Card, Col, Container, Row } from "reactstrap";

const HomeCard = () => {
  return (
    <section className="home-card">
      <Container>
        <Row className="justify-content-center">
          <Col md={6} lg={6}>
            <Card>
              <h2 className="mb-3">Let's get started</h2>
              <p className="mb-4">
                Trusted by millions, MetaMask is a secure wallet making the
                world of web3 accessible to all.
              </p>
              <div
                className="d-flex align-items-center"
                style={{ flexDirection: "column" }}
              >
                <Button className="mb-3 btn-1">Create a new wallet</Button>
                <Button className="btn-2">Import an existing wallet</Button>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HomeCard;
