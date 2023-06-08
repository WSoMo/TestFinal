import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./style.css";

import {
  BsFacebook,
  BsLinkedin,
  BsTwitter,
  BsStackOverflow,
  BsGoogle,
  BsGithub,
  BsYoutube,
} from "react-icons/bs";
const FooterComponent = () => {
  return (
    <>
      <footer className="myFooter">
        <Container>
          <table>
            <thead className="first">
              <tr>
                <ul>
                  <li>
                    <img
                      className="logo"
                      src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
                      alt=""
                    />
                  </li>
                  <li>
                    <h5>THE BASICS</h5>
                  </li>
                  <li>
                    <h5>GET INVOLVED</h5>
                  </li>
                  <li>
                    <h5>COMMUNITY</h5>
                  </li>
                  <li>
                    <h5>LEGAL</h5>
                  </li>
                </ul>
              </tr>
            </thead>
            <tbody>
              <tr className="join-commu">
                <span className="join-us">JOIN THE COMMUNITY</span>
              </tr>
              <tr>
                <ul>
                  <li>Giới thiệu về TMDB</li>
                  <li>Contact Us</li>
                  <li>Support Forums</li>
                  <li>API</li>
                  <li>System Status</li>
                </ul>
              </tr>
              <tr>
                <ul>
                  <li>Contribution Bible</li>
                  <li>Add New Movie</li>
                  <li>Add New TV Show</li>
                </ul>
              </tr>
              <tr>
                <ul>
                  <li>Guidelines</li>
                  <li>Discussions</li>
                  <li>Leaderboard</li>
                  <li>Twitter</li>
                </ul>
              </tr>
              <tr>
                <ul>
                  <li>Terms of Use</li>
                  <li>API Terms of Use</li>
                  <li>Privacy Policy</li>
                </ul>
              </tr>
            </tbody>
          </table>
          <Row>
            <Col className="">
              <h3 className="head_3">Follow us </h3>
              <ul className="socialIconsList">
                <li>
                  <a
                    rel="noreferrer"
                    href="https://www.youtube.com/"
                    target="_blank"
                  >
                    <BsFacebook />
                  </a>
                </li>
                <li>
                  <a
                    rel="noreferrer"
                    href="https://www.youtube.com/"
                    target="_blank"
                  >
                    <BsLinkedin />
                  </a>
                </li>
                <li>
                  <a
                    rel="noreferrer"
                    href="https://www.youtube.com/"
                    target="_blank"
                  >
                    <BsTwitter />
                  </a>
                </li>
                <li>
                  <a
                    rel="noreferrer"
                    href="https://www.youtube.com/"
                    target="_blank"
                  >
                    <BsStackOverflow />
                  </a>
                </li>
                <li>
                  <a
                    rel="noreferrer"
                    href="https://www.youtube.com/"
                    target="_blank"
                  >
                    <BsGoogle />
                  </a>
                </li>
                <li>
                  <a
                    rel="noreferrer"
                    href="https://www.youtube.com/"
                    target="_blank"
                  >
                    <BsGithub />
                  </a>
                </li>
                <li>
                  <a
                    rel="noreferrer"
                    href="https://www.youtube.com/"
                    target="_blank"
                  >
                    <BsYoutube />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default FooterComponent;
