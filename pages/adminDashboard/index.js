import Head from "next/head";
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
} from "react-bootstrap";

import stylesAdminDashboard from "../../styles/AdminDashboard.module.scss";
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
  return (
    <div className="globalWrap">
      <Header />

      <section
        className={
          stylesAdminDashboard["adminDashboardTableWrap"] + " " + "blockPadding"
        }
      >
        <Container>
          <Row>
            <Col lg="12">
              <div className="adminDashboardTableBox">
                <Tabs>
                  <TabList>
                    <Tab>Jobs</Tab>
                    <Tab>Questions</Tab>
                    <Tab>Answers</Tab>
                    <Tab>Comment</Tab>
                  </TabList>

                  <TabPanel>
                    <div className={stylesAdminDashboard.DashboardContent}>
                      <table class="table table-striped">
                        <thead>
                          <tr>
                            <th scope="col">Jobs name</th>
                            <th scope="col">Category</th>
                            <th scope="col">Loaction</th>
                            <th scope="col">Exp</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td scope="row">Sofware engeneer</td>
                            <td>IT</td>
                            <td>Kolkata</td>
                            <td>4yrs</td>
                          </tr>
                          <tr>
                            <td scope="row">Sofware engeneer</td>
                            <td>IT</td>
                            <td>Kolkata</td>
                            <td>4yrs</td>
                          </tr>
                          <tr>
                            <td scope="row">Sofware engeneer</td>
                            <td>IT</td>
                            <td>Kolkata</td>
                            <td>4yrs</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </TabPanel>

                  <TabPanel>
                      <div className={stylesAdminDashboard.DashboardContent}>
                        <table class="table table-striped">
                          <thead>
                            <tr>
                              <th scope="col">Question description</th>
                              <th scope="col">Category</th>
                              <th scope="col">Post date</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td scope="row">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Mauris blandit aliquet elit,
                                eget tincidunt nibh pulvinar a{" "}
                              </td>
                              <td>Software</td>
                              <td>22nd may, 2022</td>
                            </tr>

                            <tr>
                              <td scope="row">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Mauris blandit aliquet elit,
                                eget tincidunt nibh pulvinar a{" "}
                              </td>
                              <td>Software</td>
                              <td>22nd may, 2022</td>
                            </tr>
                            <tr>
                              <td scope="row">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Mauris blandit aliquet elit,
                                eget tincidunt nibh pulvinar a{" "}
                              </td>
                              <td>Software</td>
                              <td>22nd may, 2022</td>
                            </tr>

                            <tr>
                              <td scope="row">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Mauris blandit aliquet elit,
                                eget tincidunt nibh pulvinar a{" "}
                              </td>
                              <td>Software</td>
                              <td>22nd may, 2022</td>
                            </tr> <tr>
                              <td scope="row">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Mauris blandit aliquet elit,
                                eget tincidunt nibh pulvinar a{" "}
                              </td>
                              <td>Software</td>
                              <td>22nd may, 2022</td>
                            </tr> <tr>
                              <td scope="row">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Mauris blandit aliquet elit,
                                eget tincidunt nibh pulvinar a{" "}
                              </td>
                              <td>Software</td>
                              <td>22nd may, 2022</td>
                            </tr> <tr>
                              <td scope="row">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Mauris blandit aliquet elit,
                                eget tincidunt nibh pulvinar a{" "}
                              </td>
                              <td>Software</td>
                              <td>22nd may, 2022</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                   
                  </TabPanel>

                  <TabPanel>
                      <div className={stylesAdminDashboard.DashboardContent}>
                        <table class="table table-striped">
                          <thead>
                            <tr>
                              <th scope="col">Answer</th>
                              <th scope="col">Category</th>
                              <th scope="col">Post date</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td scope="row">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Mauris blandit aliquet elit,
                                eget tincidunt nibh pulvinar a{" "}
                              </td>
                              <td>Software</td>
                              <td>22nd may, 2022</td>
                            </tr>

                            <tr>
                              <td scope="row">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Mauris blandit aliquet elit,
                                eget tincidunt nibh pulvinar a{" "}
                              </td>
                              <td>Software</td>
                              <td>22nd may, 2022</td>
                            </tr>
                            <tr>
                              <td scope="row">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Mauris blandit aliquet elit,
                                eget tincidunt nibh pulvinar a{" "}
                              </td>
                              <td>Software</td>
                              <td>22nd may, 2022</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                  
                  </TabPanel>

                  <TabPanel>
            
                   <div className={stylesAdminDashboard.DashboardContent}>
                    <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Comment description</th>
                      <th scope="col">Category</th>
                      <th scope="col">Post date</th>
                     
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td scope="row">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a </td>
                      <td>Software</td>
                      <td>22nd may, 2022</td>
                     
                    </tr>

                    <tr>
                      <td scope="row">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a </td>
                      <td>Software</td>
                      <td>22nd may, 2022</td>
                     
                    </tr>
                    <tr>
                      <td scope="row">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a </td>
                      <td>Software</td>
                      <td>22nd may, 2022</td>
                     
                    </tr>
                   
                   
                  </tbody>
                </table>
                    </div>
                   
                  </TabPanel>
                </Tabs>
              </div>
            </Col>

            <Col lg="12">
<div className={stylesAdminDashboard.paginationWwrap}>
  
<nav aria-label="Page navigation example">
  <ul className="pagination">
    <li className="page-item">
      <a className="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li className="page-item"><a className="page-link" href="#">1</a></li>
    <li className="page-item"><a className="page-link" href="#">2</a></li>
    <li className="page-item"><a className="page-link" href="#">3</a></li>
    <li className="page-item">
      <a className="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
</div>
            
            </Col>
          </Row>
        </Container>
      </section>

      {/* <section
        className={
          stylesAdminDashboard["dashboardTablwWrap"] + " " + "blockPadding"
        }
      >
        <Container>
          <Row>
            <Col lg="12">
              <div className={stylesAdminDashboard.dashboardTableBox}>
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                      <th scope="col">Handle</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td colspan="2">Larry the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Col>
          </Row>
        </Container>
      </section> */}

      <Footer />
    </div>
  );
}
