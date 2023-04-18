import React from "react";
import Slider from "react-slick";
import { homeCardSlider } from "../utils/index";
import { Card, Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";

const HomeCard = (props) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
  };
  return (
    <section className="home-card">
      <Container>
        <Row className="justify-content-center">
          <Col md={10} lg={6}>
            <Card>
              <Slider {...settings}>
                {homeCardSlider.map(({ title, content, img }) => (
                  <div className="content">
                    <h2 className="mb-3">{title}</h2>
                    <p className="">{content}</p>
                    <img src={img} className="img-fluid" alt="" />
                  </div>
                ))}
              </Slider>
              <div
                className="d-flex align-items-center"
                style={{ flexDirection: "column" }}
              >
                <Link to={"/terms"} className="mb-3 btn-1">
                  Create a new wallet
                </Link>
                <Link to={"/terms"} className="btn-2">
                  Import an existing wallet
                </Link>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HomeCard;
