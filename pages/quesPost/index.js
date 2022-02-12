import Head from "next/head";
import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Button,
  NavDropdown,
  Accordion,
  Card,
  Form,
  Modal,
} from "react-bootstrap";

import stylesQuesPost from "../../styles/QuesPost.module.scss";
import Header from "../components/header";
import "bootstrap/dist/css/bootstrap.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Footer from "../components/footer";
import Link from "next/link";

// import customVirtualTourImg from "../../public/images/custom-virtual-tour.jpg";
// import customVirtualTourImg2 from "../../public/images/img-10.png";
// import customVirtualTourImg3 from "../../public/images/img-11.png";

export default function index() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="globalWrap">
      <Header />
      <section className={stylesQuesPost["jobsBanner"] + " " + ""}>
        <img src="/img/job-banner.jpg" alt="autojob" />
        <div className={stylesQuesPost.innerpageBannerText}>
          <h1>Post</h1>
          <p>Cras ultricies ligula sed</p>
        </div>
      </section>

      <section
        className={stylesQuesPost["PostmainWrap"] + " " + "blockPadding"}
      >
        <Container>
          <Row>
            <Col lg="12">
              <div className={stylesQuesPost.postTitle}>
                <h2>Intel vs qualcomm and QC offer expectation</h2>

                <div className={stylesQuesPost.postTimeReport}>
                  <div className={stylesQuesPost.postTime}>
                    <span>
                      <img src="/img/three-o-clock-clock.png" alt="autojob" />
                      <h3>3d</h3>
                    </span>
                    <span>
                      <img src="/img/comment.png" alt="autojob" />
                      <h3>Comments</h3>
                    </span>
                  </div>
                  <a href="#" className={stylesQuesPost.reposrtAbuseBt}>
                    Report Abuse
                  </a>
                </div>

                <div className={stylesQuesPost.questionDescription}>
                  <p>
                    **********Updated With Offer********** <br></br> <br></br>
                    Hello, which will be better for hardware domain? Intel OR or
                    Qcom SD?<br></br>
                    Intel : currently as intern, chances of full time is high
                    <br></br>
                    QCOm: got a verbal offer, need ur suggestions for the
                    expectations if asked!<br></br>
                    <br></br>
                    Role: Entry level hardware engineer with 3-4 yrs of
                    experience in hardware before MS in India<br></br>
                    <br></br>
                    Joining : May<br></br>
                    <br></br>
                    OCOM: Position: Senior eng, 124k base, Stocks 60k , bonus
                    25k , relocation :5k<br></br>
                    <br></br>
                    Any inputs on negotiation?<br></br>
                    <br></br>
                    any inputs are appreciated.#hardware #interview #engineer
                  </p>
                </div>

                <div className={stylesQuesPost.commentsAnswer}>
                  <a href="#">Comments</a>
                  <a href="#">Answer</a>
                </div>
              </div>

              <div className={stylesQuesPost.userComment}>
                <div className={stylesQuesPost.mainUserComment}>
                  <h3>Lily Coleman</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip consequat.
                  </p>
                  <div className={stylesQuesPost.postTimeReport}>
                    <div className={stylesQuesPost.postTime}>
                      <span>
                        <img src="/img/three-o-clock-clock.png" alt="autojob" />
                        <h3>3d</h3>
                      </span>
                      <span>
                        <img src="/img/like.png" alt="autojob" />
                        <h3>Like</h3>
                      </span>
                      <span>
                        <img src="/img/comment.png" alt="autojob" />
                        <h3>Comments</h3>
                      </span>
                    </div>
                    <a href="#" className={stylesQuesPost.reposrtAbuseBt}>
                      Report Abuse
                    </a>
                  </div>
                </div>

                <div className={stylesQuesPost.mainUserCommentReply}>
                  <h3>Simona Disa</h3>
                  <span>3 hours ago</span>
                  <p>
                    letters, as opposed to using 'Content here, content here',
                    making it look like readable English.
                  </p>
                </div>

                <div className={stylesQuesPost.mainUserCommentReply}>
                  <h3>John Smith</h3>
                  <span>10 hours ago</span>
                  <p>
                    the majority have suffered alteration in some form, by
                    injected humour, or randomised words.
                  </p>
                </div>

                <div className={stylesQuesPost.mainUserCommentReply}>
                  <h3>Natalie Smith </h3>
                  <span>13 hours ago</span>
                  <p>
                    The standard chunk of Lorem Ipsum used since the 1500s is
                    reproduced below for those interested. Sections 1.10.32 and
                    1.10.33.
                  </p>
                </div>
              </div>

              <div className={stylesQuesPost.postAnswerWrap}>
                <a href="javascript:void(0)" className={stylesQuesPost.postANswerBt} onClick={handleShow}>
                  Post Answer
                </a>
              </div>

           
              <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Type Your Answer</Modal.Title>
                </Modal.Header>
                <Modal.Body>
<div className={stylesQuesPost.postAnswer}>
<textarea></textarea>
</div>
                 
                </Modal.Body>
                <Modal.Footer>
                  {/* <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button> */}
                  <Button variant="primary" className={stylesQuesPost.submitRed}>Post</Button>
                </Modal.Footer>
              </Modal>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </div>
  );
}
