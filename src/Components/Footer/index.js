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
                      src="https://png2.cleanpng.com/sh/f27780634d78d1db51c2cf676088c8aa/L0KzQYq3VsIzN6Z8kJH0aYP2gLBuTgNidl5vhAVuLYPrccPyk71qa5YygNHsa3X8Pb32hB8ue6F0iuZ8LYPkfn7xjCNmNaRteeR0cz3pgrbsTfhlNahmhN55YYDogsS0if1ib5Z4RdRqY3vqgrF8TcVlOJZrT9UCYUGzRoGBTsE0O2g4TKkEMUW5QYO9UsAzO2c6Uag3cH7q/kisspng-san-jose-sharks-ice-hockey-logo-sports-san-jose-sharks-free-hd-wallpapers-images-backgrou-5d0ef7c7a10608.1337347915612620236596.png"
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
