import React from "react";
import { Card, Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";

const MainCard = (props) => {
  return (
    <section className="home-card">
      <Container>
        <Row className="justify-content-center">
          <Col md={6} lg={6}>
            <Card>
              {props.component}
              <div
                className="d-flex align-items-center"
                style={{ flexDirection: "column" }}
              >
                {props.firstButton && (
                  <Link to={props.firstLink} className="mb-3 btn-1">
                    {props.firstButton}
                  </Link>
                )}
                {props.secondButton && (
                  <Link to={props.secondLink} className="btn-2">
                    {props.secondButton}
                  </Link>
                )}
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MainCard;
