import { Link } from "gatsby"
import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaHeart,
} from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="section-padding">
      <Container>
        <Row>
          <Col md={4}>
            <div className="footer-box">
              <h3 className="footer-heading">About Us</h3>
              <p className="footer-details">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div className="footer-box">
              <h3 className="footer-heading">Services</h3>
              <ul className="footer-list">
                <li>
                  <Link to="/">Interface Design</Link>
                </li>
                <li>
                  <Link to="/">User Experience</Link>
                </li>
                <li>
                  <Link to="/">Web and App Development</Link>
                </li>
                <li>
                  <Link to="/">Product Strategy</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={4}>
            <div className="footer-box">
              <h3 className="footer-heading">Contact With Us</h3>
              <ul className="footer-socials">
                <li>
                  <Link to="/">
                    <FaFacebookF />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <FaTwitter />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <FaInstagram />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <FaLinkedinIn />
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col md={12}>
            <div className="footer-credit">
              <p>
                &copy; Pexels - Developed with <FaHeart /> by{" "}
                <a
                  href="http://g-k-shuvo.github.io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Kibria
                </a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
