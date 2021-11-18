import React, {useEffect, useState} from 'react';
import {Col, Container, Row, Spinner} from 'react-bootstrap';
import Footer from './../components/Footer';
import Jobs from './../components/Jobs';
import {myConfig} from '../config.js';
import {Parser} from 'html-to-react';

// var HtmlToReactParser = require('html-to-react').Parser;
function Index() {
    var htmlToReactParser = new Parser();

    const [jobs, setJobs] = useState([]);
    const [showAllJobs, setShowAllJobs] = useState(false);
    const [contents, setContents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function f() {
            await  getInitialData();
        }
        f();
    }, []);

    async function getInitialData() {
        await fetch(myConfig.API_URL + '/v1/index', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            }
        })
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                setJobs(data.jobs);
                setContents(data.contents);
                setLoading(false);
            }).catch(err=>{
                setLoading(false);
            });
    }

    async function backToInitial() {
        // console.log('all jobs');
        // setAllJob(false);
        setLoading(true);
        await  getInitialData();
    }

    async function getAllJobs() {
        // console.log('all jobs');
        // setAllJob(true);
        setLoading(true);
        await  getJobsData();
        setShowAllJobs(true)
    }

    async function getJobsData() {
        await fetch(myConfig.API_URL + '/v1/jobs', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            }
        })
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                let jobs=data.jobs;
                setJobs(prevState=>{
                    setJobs([...prevState,jobs])
                });
                setLoading(false);
            }).catch(err=>{
                setLoading(false)
            });
    }

    return (
        <Container className="">
            <Row className="">
                <Col xs={12} className="A">
                    <Row className="">
                        <Col xs={12} lg={4} className="1 min-h-300">


                            {
                                contents.main_image ?
                                    <img alt={'ansar mirzayi'} className="full-box mt-lg-2" src={myConfig.Base_URL + contents?.main_image}/>
                                    : ''
                            }
                            {/*<Image*/}
                                {/*className="full-box mt-lg-2"*/}
                                {/*src={myConfig.Base_URL + contents?.main_image}*/}
                                {/*fallback={<Shimmer />}*/}
                            {/*/>*/}
                        </Col>
                        <Col xs={12} lg={8} className="1prim mt-md-5 mt-0">
                            <Row>
                                <Col>
                                    <div className="mt-md-4 mt-0  title-middle text-small">
                                        وب سایت رسمی
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div className="mt-1 title-middle text-xxxlarge min-h-50">
                                        {htmlToReactParser.parse(contents?.user_name)}
                                    </div>
                                </Col>

                                <Col className='center-line'>
                                       

                                        <a href="https://www.npmjs.com/~ansaramman" class="logo" target="_blank"  title='npm packages'>
                                            <svg height="23" width="23" viewBox="0 0 700 700" fill="currentColor"  >
                                            <polygon fill="#cb0000" points="0,700 700,700 700,0 0,0"></polygon>
                                            <polygon fill="#ffffff" points="150,550 350,550 350,250 450,250 450,550 550,550 550,150 150,150 "></polygon>
                                            </svg>
                                        </a>

                                        <a style={{width:"32px"}} target="_blank" href="https://github.com/DevAnsar" className=" ml-3"  title='اکانت گیت هاب'>
                                            <img alt='اکانت گیت هاب' className="footer-icons" src="./img/icons/GitHub-Mark-Light-32px.png"/>
                                        </a>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div className="mt-3 title-middle text-small min-h-25">
                                        فول استک وب
                                        <a href="https://www.php.net/" className=" ml-3"  title='php'>
                                            <img alt='php' className="footer-icons" src="./img/icons/php.svg"/>
                                        </a>

                                        <a href="https://laravel.com" className=" ml-3"  title='laravel'>
                                            <img alt='laravel' className="footer-icons " src="./img/icons/logomark.min.svg"/>
                                        </a>

                                        <a href="https://www.javascript.com" className=" ml-3"  title='javascript'>
                                            <img alt='javascript' className="footer-icons"
                                                 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAclBMVEX33x4AAAD+5R/64R7XwxqLfhH/6B8aFwP03R7bxhuOgBHMuBnVwBoYFgPfyRskIAWYiRLu1x21pBaFeRDp0hyjkxRTSwqqmhVpXw3ArRfFshgxLAZvZA0+OAh2ag4tKQVhWAwQDgNaUQsqJQV8cA9JQgnQi+ziAAAB60lEQVRYhe2WYWOCIBCG5a4RqZkpWbrpVmv//y+OPDChdOg+5vsJBR7vjrvDIFi0aNGiRYsWLXpdYaupu0SrHgUwicoqTgCmYCBkayW2MgZAku9Yq/d0PwEFb7TLgCBlPWV8Lgg+mKXUm2SDeMgcZb7eWSBMXA5jiefpWSDI9e46bz5p9CXnWMTP9HDkAHCgaPumk+0ajYs2wjxljfA//z4IJY1z2o6R/+E7Fu1pfNGASUVix0jHupxiylPQjyaFquD+A4Jjlz6h9D6vJ6AgWN8z8RRPssoGYdVP6ks8v/p7zt3UCG+j3DbCI4t0TmYVbeudyC3UZk7R6leyj/oWI7vHQapr7w+7jpT6OfcMdHuNmUHt/HwbAKkJfp0UJReEd0d4QVPlKAh0hjgJCdW93ZucOo4ECcT1k0D81LMfpHqKzL4ONGgR8kzNh7dPo26KTKIa050WU7kir2kqGgLhirpFipwHDS1+V1Sx1VBV+Urycv/GgF/dwV6Kbi+0t7dR/XWqzbgY7HJYsge1txfWjxOMVcOHxnN3MbV77JzrqRlLbGjsxYVejKJwOafxAqHbz+jaLUY42kYd/roGQIb6Tt5+WH0QRFacTcgPHj9ICJDEZRZtArfJIxebKMuqleSeTW34TxHn/US+vH4BepwS04qX0e8AAAAASUVORK5CYII="
                                            />
                                        </a>


                                        <a href="https://reactjs.org" className=" ml-3"  title='reactjs'>
                                            <img alt='reactjs' className="footer-icons"
                                                 src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
                                                 />
                                        </a>

                                        <a href="https://vuejs.org/" className=" ml-3" title='vuejs'>
                                            <img alt='vuejs' className="footer-icons" src="./img/icons/vue.png"/>
                                        </a>


                                    </div>

                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div
                                        className="mt-2 title-middle text-medium min-h-30">{htmlToReactParser.parse(contents?.description)}</div>
                                </Col>
                            </Row>

                            <Row>
                                <Col className='mt-3 mb-1'>
                                    نمونه پروژه ها
                                </Col>
                            </Row>
                            <Row id="jox-box" className={showAllJobs ? 'active' : ''}>
                   
                               <Jobs jobs={jobs}/>
                    
                                {
                                    loading ? <Loading/> : ''
                                }

                            </Row>
                            <Row>
                                <Col xs={12}>
                                    <div className='showMore'>
                                        {
                                            showAllJobs ?
                                                <>
                                                    <div className='balance text-medium text-bold btn btn-sm btn-outline-light'
                                                         onClick={() => backToInitial()}>
                                                        برگشت
                                                    </div>
                                                </>
                                                :
                                                <>
                                                    <div className='balance text-medium text-bold btn btn-sm btn-outline-light'
                                                         onClick={() => getAllJobs()}>
                                                        نمایش همه ی نمونه کارها
                                                    </div>
                                                </>
                                        }

                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                </Col>

                <Footer />


            </Row>
        </Container>
    )
}

function Loading() {

    return (
        <Col xs={12} style={{textAlign: 'center'}}>
            <Spinner animation="grow" variant="secondary"/>
        </Col>
    )
}


export default Index;