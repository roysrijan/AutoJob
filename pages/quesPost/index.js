import Head from "next/head";
import React, { useEffect, useState } from "react";
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
import { Formik } from 'formik';


// import customVirtualTourImg from "../../public/images/custom-virtual-tour.jpg";
// import customVirtualTourImg2 from "../../public/images/img-10.png";
// import customVirtualTourImg3 from "../../public/images/img-11.png";

export default function index() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [questions, setquestions] = useState();
  const [comments, setcomments] = useState();
  const [showcom, setshowcom] = useState();
  const [replies, setreplies] = useState();
  const [showrep, setshowrep] = useState();


  useEffect(()=>{
    fetch('https://job-qna.herokuapp.com/v1/question?pageNo=0&pageLimit=30&isActive=true',{
      headers:{
        'Authorization': 'Bearer '+sessionStorage.getItem('token')
      }
    }).then(async (res)=>{
      setquestions(await res.json())
    })
  },[])

  const fetchComments = (id) => {
    setshowcom(id);
    fetch('https://job-qna.herokuapp.com/v1/answer?pageNo=0&pageLimit=30&isActive=true&questionID='+id,{
      headers:{
        'Authorization': 'Bearer '+sessionStorage.getItem('token')
      }
    }).then(async (res)=>{
      setcomments(await res.json())
    })
  }
  const fetchReplies = (id) => {
    setshowrep(id);
    fetch('https://job-qna.herokuapp.com/v1/comment?pageNo=0&pageLimit=30&isActive=true&questionID='+id,{
      headers:{
        'Authorization': 'Bearer '+sessionStorage.getItem('token')
      }
      }).then(async (res)=>{
        setreplies(await res.json())
      })
  }
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
             {/*  <div className={stylesQuesPost.postTitle}>
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
              </div> */}

              {questions && questions?.message[0]?.data?.map(ele=>(
              <div className={stylesQuesPost.userComment}>
                <div className={stylesQuesPost.mainUserComment}>
                  <h3>{ele.question}</h3>
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
                        <h3>{Math.floor((new Date() - new Date(ele.createdAt))/ (1000 * 60 * 60 * 24))}d</h3>
                      </span>
                      <span>
                        <img src="/img/like.png" alt="autojob" />
                        <h3>Like  ({ele.likesCount})</h3>
                      </span>
                      <span style={{cursor: 'pointer'}} onClick={()=>fetchComments(ele._id)}>
                        <img src="/img/comment.png" alt="autojob"/>
                        <h3>Comments</h3>
                      </span>
                    </div>
                    <a href="#" className={stylesQuesPost.reposrtAbuseBt}>
                      Report Abuse
                    </a>
                  </div>
                </div>
                
                {showcom==ele._id &&(
                  <>
                  <Formik
                  initialValues={{ emailID: 'roy.srijan@gmail.com', password: 'sfdsfd' }}
                  onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                      alert(JSON.stringify(values, null, 2));
                      fetch('https://job-qna.herokuapp.com/v1/answer', {
                        method: 'POST',
                        headers:{
                          'Content-Type': 'application/json',
                          'Authorization': 'Bearer '+sessionStorage.getItem('token')
                        },
                        body: JSON.stringify({...values, questionID: ele._id}, null, 2)
                      }).then(res=>{
                        setSubmitting(false);
                      })
                      
                    }, 400);
                  }}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                  }) => (
                  <form onSubmit={handleSubmit}>
                  <div className={stylesQuesPost.postAnswer}>
                  <textarea name="answer" onChange={handleChange}></textarea>
                  </div>
                  <Button type="submit" variant="primary" className={stylesQuesPost.submitRed} disabled={isSubmitting}>Post</Button>
                  </form>
                  )}
                  </Formik>
                  </>
                )}

                {comments && showcom==ele._id && comments?.message[0]?.data?.map(cmt=>
                  (<div className={stylesQuesPost.mainUserCommentReply}>
                  <h3>{cmt.user_first_name} {cmt.user_last_name}</h3>
                  <div className={stylesQuesPost.postTimeReport}>
                    <div className={stylesQuesPost.postTime}>
                      <span>
                        <img src="/img/three-o-clock-clock.png" alt="autojob" />
                        <h3>{Math.floor((new Date() - new Date(cmt.createdAt))/ (1000 * 60 * 60 * 24))}d</h3>
                      </span>
                      <span>
                        <img src="/img/like.png" alt="autojob" />
                        <h3>Like  ({cmt.likesCount})</h3>
                      </span>
                      <span style={{cursor: 'pointer'}} onClick={()=>fetchReplies(cmt._id)}>
                        <img src="/img/comment.png" alt="autojob"/>
                        <h3>Comments</h3>
                      </span>
                    </div>
                    <a href="#" className={stylesQuesPost.reposrtAbuseBt}>
                      Report Abuse
                    </a>
                  </div>                  <p>
                    {cmt.answer}
                  </p>
                  {showrep==cmt._id &&(
                  <>
                  <Formik
                  initialValues={{ emailID: 'roy.srijan@gmail.com', password: 'sfdsfd' }}
                  onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                      alert(JSON.stringify(values, null, 2));
                      fetch('https://job-qna.herokuapp.com/v1/comment', {
                        method: 'POST',
                        headers:{
                          'Content-Type': 'application/json',
                          'Authorization': 'Bearer '+sessionStorage.getItem('token')
                        },
                        body: JSON.stringify({...values, questionID: cmt._id}, null, 2)
                      }).then(res=>{
                        setSubmitting(false);
                      })
                      
                    }, 400);
                  }}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                  }) => (
                  <form onSubmit={handleSubmit}>
                  <div className={stylesQuesPost.postAnswer}>
                  <textarea name="answer" onChange={handleChange}></textarea>
                  </div>
                  <Button type="submit" variant="primary" className={stylesQuesPost.submitRed} disabled={isSubmitting}>Post</Button>
                  </form>
                  )}
                  </Formik>
                  </>
                )}

                {replies && showrep==cmt._id && replies?.message[0]?.data?.map(rep=>
                  (<div className={stylesQuesPost.mainUserCommentReply}>
                  <h3>{rep.user_first_name} {rep.user_last_name}</h3>
                  <div className={stylesQuesPost.postTimeReport}>
                    <div className={stylesQuesPost.postTime}>
                      <span>
                        <img src="/img/three-o-clock-clock.png" alt="autojob" />
                        <h3>{Math.floor((new Date() - new Date(rep.createdAt))/ (1000 * 60 * 60 * 24))}d</h3>
                      </span>
                      <span>
                        <img src="/img/like.png" alt="autojob" />
                        <h3>Like  ({rep.likesCount})</h3>
                      </span>
                    </div>
                    <a href="#" className={stylesQuesPost.reposrtAbuseBt}>
                      Report Abuse
                    </a>
                  </div>                  <p>
                    {cmt.answer}
                  </p>
                </div>))}
                </div>))}

                {/* <div className={stylesQuesPost.mainUserCommentReply}>
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
                </div> */}
              </div>
              ))}

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
                <Formik
                  initialValues={{ emailID: 'roy.srijan@gmail.com', password: 'sfdsfd' }}
                  onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                      alert(JSON.stringify(values, null, 2));
                      fetch('https://job-qna.herokuapp.com/v1/question', {
                        method: 'POST',
                        headers:{
                          'Content-Type': 'application/json',
                          'Authorization': 'Bearer '+sessionStorage.getItem('token')
                        },
                        body: JSON.stringify(values, null, 2)
                      }).then(res=>{
                        setSubmitting(false);
                      })
                      
                    }, 400);
                  }}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                  }) => (
                <form onSubmit={handleSubmit}>
                <Modal.Header closeButton>
                  <Modal.Title>Type Your Answer</Modal.Title>
                </Modal.Header>
                <Modal.Body>
<div className={stylesQuesPost.postAnswer}>
<textarea name="question" onChange={handleChange}></textarea>
</div>
                 
                </Modal.Body>
                <Modal.Footer>
                  {/* <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button> */}
                  <Button type="submit" variant="primary" className={stylesQuesPost.submitRed} disabled={isSubmitting}>Post</Button>
                </Modal.Footer>
                </form>
              )}
              </Formik>
              </Modal>
              
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </div>
  );
}
