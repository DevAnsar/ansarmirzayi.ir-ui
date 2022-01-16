import React from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import Footer, { Projects } from "../components/Footer";
import { Jobs } from "../components/Jobs";
import { myConfig } from "../config.js";
import { Parser } from "html-to-react";

var htmlToReactParser = new Parser();

class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      jobs: [],
      AllJobs: [],
      showAllJobs: false,
      contents: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.getInitialData();
  }

  getInitialData() {
    // this.setState({loading:true});

    fetch(myConfig.API_URL + "/v1/index", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        const { jobs, contents } = data;
        this.setState({
          jobs,
          contents,
          loading: false,
        });
      })
      .catch((err) => {
        this.setState({ loading: true });
      });
  }

  backToInitial() {
    this.setState({ showAllJobs: false });
  }

  getAllJobs() {
    this.setState({ loading: true, showAllJobs: true });
    this.setState({ showAllJobs: true });
    if (this.state.AllJobs.length === 0) {
      this.getJobsData();
    }
  }

  getJobsData() {
    this.setState({ loading: true });
    fetch(myConfig.API_URL + "/v1/jobs", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        let { jobs } = data;
        this.setState((prev) => {
          return {
            AllJobs: jobs,
            loading: false,
          };
        });
      })
      .catch((err) => {
        this.setState({ loading: false });
      });
  }

  render() {
    return (
      <Container>
        <Row>
          <Col xs={12} className="A">
            <Row>
              <Col xs={4} md={4} lg={3} className="1 max-h-300">
                {this.state.contents.main_image ? (
                  <img
                    alt={"ansar mirzayi"}
                    className="full-box mt-lg-2"
                    src={myConfig.Base_URL + this.state.contents?.main_image}
                  />
                ) : (
                  ""
                )}
              </Col>
              <Col
                xs={8}
                md={8}
                lg={9}
                className="1prim mt-md-5 mt-0 information"
              >
                <Row>
                  <Col>
                    <div className="mt-md-4 mt-0  name-label">وب سایت رسمی</div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="mt-1 title-middle name-title ">
                      {htmlToReactParser.parse(this.state.contents?.user_name)}
                    </div>
                  </Col>

                  <Col className="center-line">
                    <a
                      rel="noreferrer"
                      href="https://www.npmjs.com/~ansaramman"
                      className="logo"
                      target="_blank"
                      title="npm packages"
                    >
                      <svg
                        className="skill-icons"
                        viewBox="0 0 700 700"
                        fill="currentColor"
                      >
                        <polygon
                          fill="#cb0000"
                          points="0,700 700,700 700,0 0,0"
                        ></polygon>
                        <polygon
                          fill="#ffffff"
                          points="150,550 350,550 350,250 450,250 450,550 550,550 550,150 150,150 "
                        ></polygon>
                      </svg>
                    </a>

                    <a
                      style={{ width: "32px" }}
                      rel="noreferrer"
                      target="_blank"
                      href="https://github.com/DevAnsar"
                      className=" ml-3 "
                      title="اکانت گیت هاب"
                    >
                      <img
                        alt="اکانت گیت هاب"
                        className="skill-icons"
                        src="./img/icons/GitHub-Mark-Light-32px.png"
                      />
                    </a>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <div className="mt-3 title-middle name-label min-h-25">
                      فول استک وب
                      <a
                        href="https://www.php.net/"
                        className=" ml-3"
                        title="php"
                      >
                        <img
                          alt="php"
                          className="skill-icons"
                          src="./img/icons/php.svg"
                        />
                      </a>
                      <a
                        href="https://laravel.com"
                        className=" ml-3"
                        title="laravel"
                      >
                        <img
                          alt="laravel"
                          className="skill-icons "
                          src="./img/icons/logomark.min.svg"
                        />
                      </a>
                      <a
                        href="https://www.javascript.com"
                        className=" ml-3"
                        title="javascript"
                      >
                        <img
                          alt="javascript"
                          className="skill-icons"
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAclBMVEX33x4AAAD+5R/64R7XwxqLfhH/6B8aFwP03R7bxhuOgBHMuBnVwBoYFgPfyRskIAWYiRLu1x21pBaFeRDp0hyjkxRTSwqqmhVpXw3ArRfFshgxLAZvZA0+OAh2ag4tKQVhWAwQDgNaUQsqJQV8cA9JQgnQi+ziAAAB60lEQVRYhe2WYWOCIBCG5a4RqZkpWbrpVmv//y+OPDChdOg+5vsJBR7vjrvDIFi0aNGiRYsWLXpdYaupu0SrHgUwicoqTgCmYCBkayW2MgZAku9Yq/d0PwEFb7TLgCBlPWV8Lgg+mKXUm2SDeMgcZb7eWSBMXA5jiefpWSDI9e46bz5p9CXnWMTP9HDkAHCgaPumk+0ajYs2wjxljfA//z4IJY1z2o6R/+E7Fu1pfNGASUVix0jHupxiylPQjyaFquD+A4Jjlz6h9D6vJ6AgWN8z8RRPssoGYdVP6ks8v/p7zt3UCG+j3DbCI4t0TmYVbeudyC3UZk7R6leyj/oWI7vHQapr7w+7jpT6OfcMdHuNmUHt/HwbAKkJfp0UJReEd0d4QVPlKAh0hjgJCdW93ZucOo4ECcT1k0D81LMfpHqKzL4ONGgR8kzNh7dPo26KTKIa050WU7kir2kqGgLhirpFipwHDS1+V1Sx1VBV+Urycv/GgF/dwV6Kbi+0t7dR/XWqzbgY7HJYsge1txfWjxOMVcOHxnN3MbV77JzrqRlLbGjsxYVejKJwOafxAqHbz+jaLUY42kYd/roGQIb6Tt5+WH0QRFacTcgPHj9ICJDEZRZtArfJIxebKMuqleSeTW34TxHn/US+vH4BepwS04qX0e8AAAAASUVORK5CYII="
                        />
                      </a>
                      <a
                        href="https://reactjs.org"
                        className=" ml-3"
                        title="reactjs"
                      >
                        <img
                          alt="reactjs"
                          className="skill-icons"
                          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
                        />
                      </a>
                      <a
                        href="https://vuejs.org/"
                        className=" ml-3"
                        title="vuejs"
                      >
                        <img
                          alt="vuejs"
                          className="skill-icons"
                          src="./img/icons/vue.png"
                        />
                      </a>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <div className="mt-2 title-middle text-medium min-h-30">
                      {htmlToReactParser.parse(
                        this.state.contents?.description
                      )}
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col xs={12} className="1prim mt-md-5 mt-0">
                <Row>
                  <Col className="mt-3 mb-1 name-label">نمونه پروژه ها</Col>
                </Row>
                <Row
                  id="jox-box"
                  className={this.state.showAllJobs ? "active" : ""}
                >
                  {/* {this.state.showAllJobs ? console.log() : console.log(this.state.jobs) } */}
                  <Jobs
                    jobs={
                      this.state.showAllJobs
                        ? [...this.state.jobs, ...this.state.AllJobs]
                        : this.state.jobs
                    }
                  />

                  {this.state.loading ? <Loading /> : ""}
                </Row>
                <Row>
                  <Col xs={12}>
                    <div className="showMore">
                      {this.state.showAllJobs ? (
                        <>
                          <div
                            className="balance text-medium text-bold btn btn-sm btn-outline-light"
                            onClick={() => this.backToInitial()}
                          >
                            برگشت
                          </div>
                        </>
                      ) : (
                        <>
                          <div
                            className="balance text-medium text-bold btn btn-sm btn-outline-light"
                            onClick={() => this.getAllJobs()}
                          >
                            نمایش همه ی نمونه کارها
                          </div>
                        </>
                      )}
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>

          <Projects />
          <Footer />
        </Row>
      </Container>
    );
  }
}

const Loading = () => {
  return (
    <Col xs={12} style={{ textAlign: "center" }}>
      <Spinner animation="grow" variant="secondary" />
    </Col>
  );
};
export default Index;
