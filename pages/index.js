import Head from "next/head";
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Button,
  NavDropdown,
  Modal,
  Card,
} from "react-bootstrap";
import stylesHome from "../styles/Home.module.scss";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/header";
import Footer from "./components/footer";


export default function Home() {
  return (
    <>
      <div className="globalWrap">
    <Header/>
        <section
          className={
            stylesHome["topPartContainer"] +
            " " +
            stylesHome["topPartContainerForHome"]
          }
        >
          <div className={stylesHome.whatWeOfferTitle}>
            <img src="/img/banner.jpg" alt="autojob" />
          </div>
          <div className={stylesHome.searchBarWrap}>
            <Container>
              <div className={stylesHome.searchBarInnerBox}>
                <Row>
                  <Col
                    lg="4"
                    sm="4"
                    className={
                      stylesHome["borright"] +
                      " " +
                      stylesHome["searchBarIcons"]
                    }
                  >
                    <img src="/img/search-interface-symbol.png" alt="autojob" />
                    <input
                      type="text"
                      id="fname"
                      name="fname"
                      placeholder="Job Title or Keywords"
                    />
                  </Col>
                  <Col
                    lg="3"
                    sm="3"
                    className={
                      stylesHome["borright"] +
                      " " +
                      stylesHome["searchBarIcons"]
                    }
                  >
                    <img src="/img/location.png" alt="autojob" />
                    <input
                      type="text"
                      id="fname"
                      name="fname"
                      placeholder="Choose City"
                    />
                  </Col>
                  <Col
                    lg="3"
                    sm="3"
                    className={
                      stylesHome[""] + " " + stylesHome["searchBarIcons"]
                    }
                  >
                    <img src="/img/category.png" alt="autojob" />
                    <input
                      type="text"
                      id="fname"
                      name="fname"
                      placeholder="Job Category"
                    />
                  </Col>
                  <Col lg="2" sm="2">
                    <a href="#" class="btn btn-primary search-btn">
                      Search
                    </a>
                  </Col>
                </Row>
              </div>
            </Container>
          </div>
        </section>

        <section className={stylesHome["jobsNPostWrap"] + " " + "blockPadding"}>
          <Container>
            <Row>
              <Col lg="12">
                <div className={stylesHome.sectionTitle}>
                  <h2> About Us </h2> <p> Praesent sapien massa </p>
                </div>
              </Col>
              <Col lg="6">
                <div className={stylesHome.jobsNPostWrap1}>
                  <img src="/img/job-seeker.png" alt="autojob" />
                  <h2> Job section </h2>
                  <p>
                    Curabitur non nulla sit amet nisl tempus convallis quis ac
                    lectus.Curabitur arcu erat, accumsan id imperdiet et,
                    porttitor at sem.
                  </p>
                  <a href="!#" className={stylesHome.knowMore}>
                    Know More
                  </a>
                </div>
              </Col>
              <Col lg="6">
                <div className={stylesHome.jobsNPostWrap1}>
                  <img src="/img/conversation.png" alt="autojob" />
                  <h2> Post Section </h2>
                  <p>
                    Curabitur non nulla sit amet nisl tempus convallis quis ac
                    lectus.Curabitur arcu erat, accumsan id imperdiet et,
                    porttitor at sem.
                  </p>
                  <a href="!#" className={stylesHome.knowMore}>
                    Know More
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className={stylesHome["browseJobs"] + " " + "blockPadding"}>
          <Container>
            <Row>
              <Col lg="12">
                <div
                  className={
                    stylesHome["sectionTitle"] +
                    " " +
                    stylesHome["sectionTitleWhite"]
                  }
                >
                  <h2> Browse Jobs By Category </h2>
                  <p>
                    Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco
                    Laboris Aliquip.
                  </p>
                </div>
              </Col>
              <Col lg="3" sm="3">
                <div className={stylesHome.jobCategoryBox}>
                  <img src="/img/bars.png" alt="autojob" />
                  <h3> Finance </h3> <p> 4286 jobs </p>
                </div>
              </Col>
              <Col lg="3" sm="3">
                <div className={stylesHome.jobCategoryBox}>
                  <img src="/img/sales.png" alt="autojob" />
                  <h3> Sale / Markting </h3> <p> 2000 jobs </p>
                </div>
              </Col>
              <Col lg="3" sm="3">
                <div className={stylesHome.jobCategoryBox}>
                  <img src="/img/open-book.png" alt="autojob" />
                  <h3> Education / Training </h3> <p> 1450 jobs </p>
                </div>
              </Col>
              <Col lg="3" sm="3">
                <div className={stylesHome.jobCategoryBox}>
                  <img src="/img/technology.png" alt="autojob" />
                  <h3> Technologies </h3> <p> 5100 jobs </p>
                </div>
              </Col>
              <Col lg="3" sm="3">
                <div className={stylesHome.jobCategoryBox}>
                  <img src="/img/creativity.png" alt="autojob" />
                  <h3> Art / Design </h3> <p> 5079 jobs </p>
                </div>
              </Col>
              <Col lg="3" sm="3">
                <div className={stylesHome.jobCategoryBox}>
                  <img src="/img/healthcare.png" alt="autojob" />
                  <h3> Healthcare </h3> <p> 2000 jobs </p>
                </div>
              </Col>
              <Col lg="3" sm="3">
                <div className={stylesHome.jobCategoryBox}>
                  <img src="/img/science.png" alt="autojob" />
                  <h3> Science </h3> <p> 1450 jobs </p>
                </div>
              </Col>
              <Col lg="3" sm="3">
                <div className={stylesHome.jobCategoryBox}>
                  <img src="/img/food.png" alt="autojob" />
                  <h3> Food Services </h3> <p> 5100 jobs </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className={stylesHome["hotJobs"] + " " + "blockPadding"}>
          <Container>
            <Row>
              <Col lg="12">
                <div className={stylesHome["sectionTitle"] + " " + ""}>
                  <h2>Hot Jobs</h2>
                  <p>Nostrud Exercitation Ullamco Laboris Aliquip.</p>
                </div>
              </Col>

              <Col lg="3">
                <Card>
                  <Card.Img variant="top" src="/img/graphic-designer.jpg" />
                  <Card.Body>
                    <Card.Title>Graphic Designer</Card.Title>
                    <div className={stylesHome.jobLocation}>
                      {" "}
                      <img src="/img/location.png" alt="autojob" />{" "}
                      <p>Dallas, United States</p>
                    </div>

                    <div className={stylesHome.monthsAgo}>
                      <span>
                        {" "}
                        <img src="/img/calendar.png" alt="autojob" />{" "}
                        <p> 4 months ago</p>{" "}
                      </span>
                      <span>
                        {" "}
                        <img
                          src="/img/three-o-clock-clock.png"
                          alt="autojob"
                        />{" "}
                        <p> Full Time</p>{" "}
                      </span>
                    </div>
                    {/* <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text> */}
                    <a
                      href="!#"
                      className={
                        stylesHome["knowMore"] + " " + stylesHome["viewDetails"]
                      }
                    >
                      View details
                    </a>
                  </Card.Body>
                </Card>
              </Col>

              <Col lg="3">
                <Card>
                  <Card.Img variant="top" src="/img/soft-eng.jpg" />
                  <Card.Body>
                    <Card.Title>SOFTWARE ENGINEER</Card.Title>
                    <div className={stylesHome.jobLocation}>
                      {" "}
                      <img src="/img/location.png" alt="autojob" />{" "}
                      <p>Dallas, United States</p>
                    </div>

                    <div className={stylesHome.monthsAgo}>
                      <span>
                        {" "}
                        <img src="/img/calendar.png" alt="autojob" />{" "}
                        <p> 4 months ago</p>{" "}
                      </span>
                      <span>
                        {" "}
                        <img
                          src="/img/three-o-clock-clock.png"
                          alt="autojob"
                        />{" "}
                        <p> Full Time</p>{" "}
                      </span>
                    </div>
                    {/* <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text> */}
                    <a
                      href="!#"
                      className={
                        stylesHome["knowMore"] + " " + stylesHome["viewDetails"]
                      }
                    >
                      View details
                    </a>
                  </Card.Body>
                </Card>
              </Col>

              <Col lg="3">
                <Card>
                  <Card.Img variant="top" src="/img/managing-director.jpg" />
                  <Card.Body>
                    <Card.Title>MANAGING DIRECTOR</Card.Title>
                    <div className={stylesHome.jobLocation}>
                      {" "}
                      <img src="/img/location.png" alt="autojob" />{" "}
                      <p>Dallas, United States</p>
                    </div>

                    <div className={stylesHome.monthsAgo}>
                      <span>
                        {" "}
                        <img src="/img/calendar.png" alt="autojob" />{" "}
                        <p> 4 months ago</p>{" "}
                      </span>
                      <span>
                        {" "}
                        <img
                          src="/img/three-o-clock-clock.png"
                          alt="autojob"
                        />{" "}
                        <p> Full Time</p>{" "}
                      </span>
                    </div>
                    {/* <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text> */}
                    <a
                      href="!#"
                      className={
                        stylesHome["knowMore"] + " " + stylesHome["viewDetails"]
                      }
                    >
                      View details
                    </a>
                  </Card.Body>
                </Card>
              </Col>

              <Col lg="3">
                <Card>
                  <Card.Img variant="top" src="/img/accountant.jpg" />
                  <Card.Body>
                    <Card.Title>Senior Accountant</Card.Title>
                    <div className={stylesHome.jobLocation}>
                      {" "}
                      <img src="/img/location.png" alt="autojob" />{" "}
                      <p>Dallas, United States</p>
                    </div>

                    <div className={stylesHome.monthsAgo}>
                      <span>
                        {" "}
                        <img src="/img/calendar.png" alt="autojob" />{" "}
                        <p> 4 months ago</p>{" "}
                      </span>
                      <span>
                        {" "}
                        <img
                          src="/img/three-o-clock-clock.png"
                          alt="autojob"
                        />{" "}
                        <p> Full Time</p>{" "}
                      </span>
                    </div>
                    {/* <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text> */}
                    <a
                      href="!#"
                      className={
                        stylesHome["knowMore"] + " " + stylesHome["viewDetails"]
                      }
                    >
                      View details
                    </a>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>

        <section className={stylesHome["allPosts"] + " " + "blockPadding"}>
          <Container>
            <Row>
              <Col lg="12">
                <div className={stylesHome["sectionTitle"] + " " + ""}>
                  <h2>All posts</h2>
                  <p>Nostrud Exercitation Ullamco Laboris Aliquip.</p>
                </div>
              </Col>
              <Col lg="4">
                <div className={stylesHome.postBox}>
                  <h3>Software Engineering Career</h3>
                  <h2>Microsoft codility test for senior swe</h2>
                  <p className={stylesHome.postBoxContent}>
                    Hi All, Has anyone given recently the online codility test
                    for Microsoft. It tells 2 questions 70 minutes,not sure how
                    hard they are going to be. Any inputs, please help. Don't
                    want to miss the chance.#microsoft
                  </p>

                  <div className={stylesHome.viewLikesComWrap}>
                    <div className={stylesHome.tags}>
                      <p>Pinterest . SSbA33</p>
                    </div>
                    <div className={stylesHome.viewLikesComWrapInner}>
                      <span>
                        <img src="/img/three-o-clock-clock.png" alt="autojob" />{" "}
                        <p>Yesterday</p>
                      </span>
                      <span>
                        <img src="/img/comment.png" alt="autojob" />{" "}
                        <p>Comments</p>
                      </span>
                    </div>
                  </div>
                </div>
              </Col>

              <Col lg="4">
                <div className={stylesHome.postBox}>
                  <h3>FOOD & DINING</h3>
                  <h2>Microsoft codility test for senior swe</h2>
                  <p className={stylesHome.postBoxContent}>
                  Most of the restaurants are not set up for deliveries. Many sit down restaurants don’t understand the deliveries are way different than serving in house.
                  </p>

                  <div className={stylesHome.viewLikesComWrap}>
                    <div className={stylesHome.tags}>
                      <p>Twitter . sigmas</p>
                    </div>
                    <div className={stylesHome.viewLikesComWrapInner}>
                      <span>
                        <img src="/img/three-o-clock-clock.png" alt="autojob" />{" "}
                        <p>Yesterday</p>
                      </span>
                      <span>
                        <img src="/img/comment.png" alt="autojob" />{" "}
                        <p>Comments</p>
                      </span>
                    </div>
                  </div>
                </div>
              </Col>

              <Col lg="4">
                <div className={stylesHome.postBox}>
                  <h3>TECH</h3>
                  <h2>How does one add diversity to their team?</h2>
                  <p className={stylesHome.postBoxContent}>
                  This is a strawman argument, nobody is defending homogeneity, just pointing out that the supposed evidence about the profit of diversity is shaky.
                  </p>

                  <div className={stylesHome.viewLikesComWrap}>
                    <div className={stylesHome.tags}>
                      <p>Pinterest . SSbA33</p>
                    </div>
                    <div className={stylesHome.viewLikesComWrapInner}>
                      <span>
                        <img src="/img/three-o-clock-clock.png" alt="autojob" />{" "}
                        <p>Yesterday</p>
                      </span>
                      <span>
                        <img src="/img/comment.png" alt="autojob" />{" "}
                        <p>Comments</p>
                      </span>
                    </div>
                  </div>
                </div>
              </Col>

              <Col lg="12">
<div className={stylesHome.seeMoreWrap}>

<a href="!#" className={stylesHome.knowMore}>
                    See More
                  </a>
</div>

           
              </Col>
            </Row>
          </Container>
        </section>
      <Footer/>
      </div>
    </>
  );
}
