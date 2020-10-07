import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-scroll';
import Title from "../Title/Title";
import AboutImg from "../Image/AboutImg";


const About = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade
              left={isDesktop}
              bottom={isMobile}
              duration={1000}
              delay={1000}
              distance="30px"
            >
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  Hi, I'm a full stack developer. I've a good skill of making
                  responsive UI and a good knowledge about HTML5 and CSS3. After
                  developing a couple of sites in ReactJS, now I have a good
                  understanding about this and I'm confident that I can make
                  anything using React from scratch. I have developed face
                  detection, voice to text and dialog flow API in my projects. I
                  also have well grounded knowledge about NodeJs,MongoDB and
                  PostgreSql.
                </p>
                <p className="about-wrapper__info-text">
                  I've completed my B.Sc from University of Chittagong in C.S.E
                  .As a student of computer science I have a good knowledge
                  about algorithms, data stucture, database management , machine
                  learning and so on.I found developing is my passion as it is
                  both exciting and interestng.
                </p>

               

                <div className="d-flex mt-3" >
                  <a
                    style={{ marginRight: '10px'}}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn cta-btn--resume"
                    href="https://drive.google.com/file/d/1moLEDfsugM-1cxy6je331CUpFB8gJtYD/view?usp=sharing"
                  >
                    Resume
                  </a>
                  <span className='cta-btn cta-btn--project'>
                  <Link to='projects' smooth duration={1000}  >
                       Explore my projects <span></span>😊
                    </Link>
                  </span>
                  
                </div>
                
               
            
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
