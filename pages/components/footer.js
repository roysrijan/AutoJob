import footerStyles from "../../styles/Footer.module.scss";
import Link from "next/link";

import {
  Container,
  Row,
  Col,
  Form,
  Button,
} from "react-bootstrap";

export default function Footer() {
  return (
    <footer className={footerStyles.footer}>
      <Container>
        <Row>
          <Col lg="4">
            <div className={footerStyles.footerBox}>
              {/* <Image src={footLogo} alt="autojob" /> */}
              {/* <img src="/img/logo.png" alt="autojob" /> */}
              <h2>AUTOJOB</h2>

              <ul>
                <li>
                  <p className={footerStyles.p1}>
                  Nulla quis lorem ut libero malesuada feugiat. Curabitur aliquet quam id dui posuere blandit
                  </p>
                </li>
                {/* <li>
                  <img src="/img/location-icon.png" alt="autojob" />

                  <p>Location</p>
                </li>

                <li>
                  <img src="/img/contact-info-icon.png" alt="autojob" />

                  <p>Contact Info</p>
                </li> */}

                <li>
                  {/* <Image src={linkIcon} alt="autojob" /> */}
                  <img src="/img/link-icon.png" alt="autojob" />

                  <p>www.autojob.tech</p>
                </li>
              </ul>
            </div>
          </Col>

          <Col lg="5">
            <div className={footerStyles.footerBoxServices}>
              <h2>Quick Links</h2>
              <span>
                <ul>
                  <li>
                    <Link href="">
                      <a>Posts</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <a>Jobs</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <a>About Us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <a>Contact Us</a>
                    </Link>
                  </li>
                  {/* <li>
                    <Link href="/3d-tours">
                      <a>3D Tours</a>
                    </Link>
                  </li> */}
                </ul>

                {/* <ul>
                  <li>
                    <a href="#">Industries</a>
                  </li>
                  <li>
                    <Link href="#!">
                      <a>Blog</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/how-we-can-help">
                      <a>FAQ</a>
                    </Link>
                  </li>
                </ul> */}
              </span>
            </div>
          </Col>

         

          <Col lg="3">
            <div className={footerStyles.footerBoxServices}>
              <h2>Get in touch</h2>
              <div className={footerStyles.newsletterWrap}>
                <Form className={footerStyles.newsletterForm}>
                  <input
                    type="text"
                    id="lname"
                    name="lname"
                    placeholder="Enter your email"
                    readOnly
                  />
                  <Button>
                  
                    <img src="/img/newsletter-send.png" alt="autojob" />
                  </Button>
                </Form>
              </div>

              <div className={footerStyles.socialWrap}>
                <h2>Social networks</h2>
                <div>
                  <a>
                   
                    <img src="/img/insta.png" alt="autojob" />
                  </a>
                  <a>
                  
                    <img src="/img/twitter.png" alt="autojob" />
                  </a>
                  <a>
                   
                    <img src="/img/facebook.png" alt="autojob" />
                  </a>
                  <a>
                   
                    <img src="/img/insta.png" alt="autojob" />
                  </a>
                </div>
              </div>
            </div>
          </Col>

          <Col lg="12">
            <p className={footerStyles.copyRight}>Copiright 2017 - 2021 @Autojob</p>
          </Col>
       
       
        </Row>
      </Container>
    </footer>
  );
}
