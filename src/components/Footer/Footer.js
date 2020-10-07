import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { footerData } from '../data/data'





const Footer = () => {
  


  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        
        <div className="social-links">
          {
            footerData.networks.map((network) => {
              const { id, name, url } = network;
              return (
                <a
                  key={id}
                  href={url || 'https://github.com/cobidev/gatsby-simplefolio'}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={name}
                >
                  <i className={`fa fa-${name || 'refresh'} fa-inverse`} />
                </a>
              );
            })}
        </div>
       
        

       
      </Container>
    </footer>
  );
};

export default Footer;
