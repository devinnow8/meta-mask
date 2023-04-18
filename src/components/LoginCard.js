import React from "react";
import { Button, Card, Col, Container, Input, Row } from "reactstrap";
import { Link } from "react-router-dom";

const LoginCard = () => {
  return (
    <section className="login-card">
      <Container>
        <Row className="justify-content-center">
          <Col md={10} lg={6}>
            <Card>
              <h2 className="mb-3">Create password</h2>
              <p className="mb-4">
                This password will unlock your MetaMask wallet only on this
                device. MetaMask can not recover this password.
              </p>
              <form className="form">
                <div className="mb-3">
                  <div className="d-flex justify-content-between">
                    <label htmlFor="">New password (8 characters min)</label>
                    <a href="/">Show</a>
                  </div>
                  <Input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="">Confirm password</label>
                  <Input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Confirm password"
                  />
                </div>
                <div className="mb-3">
                  <div className="d-flex align-items-start">
                    <Input
                      type="checkbox"
                      className="form-control"
                      id="check"
                    />
                    <label htmlFor="check" className="ml-4 check-label">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      A recusandae necessitatibus, cumque sapiente ipsum est?
                    </label>
                  </div>
                </div>
                <div className="mb-3">
                  <Button disabled className="primary-btn">
                    Create a new wallet
                  </Button>
                </div>
              </form>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LoginCard;
