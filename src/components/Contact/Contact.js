import React, { useContext } from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-scroll";
import { Container } from "react-bootstrap";
import { contactData } from "../data/data";

import Title from "../Title/Title";

const Contact = () => {
  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              If you like my portfolio, please contact me. It will be my
              plessure to give an interview in your company. Thanks
            </p>
            <a
              href="tel:01670706699"
              className="cta-btn cta-btn--resume"
              style={{ textDecoration: "none", marginRight: "10px" }}
            >
              Click to Call me!
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href={`mailto:${contactData.email}`}
            >
              Let's talk
            </a>
            <div style={{ float: "right" }}>
              <span className="back-to-top">
                <Link to="hero" smooth duration={1000}>
                  <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
                  <p>Go to Top</p>
                </Link>
              </span>
            </div>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
