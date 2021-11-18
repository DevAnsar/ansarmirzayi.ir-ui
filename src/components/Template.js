import React from "react"
import "./../styles/master.css"
import { Container } from 'react-bootstrap';
import {Helmet} from "react-helmet";

function Template({ children }) {
  return (
    <Container fluid id="template" className={`rtl`}>

        <Helmet>
            <meta charSet="utf-8" />
            <title>انصارم من - ansaramman</title>
            <meta name="description" content="انصار میرزایی" />
            <meta name="description" content="انصار میرزائی" />
            <meta name="description" content="انصار" />
            <meta name="description" content="ansar mirzayi" />
            <meta name="description" content="ansar" />
            <meta name="description" content="برنامه نویسی ، برنامه نویسی در ارومیه ، طراحی سایت ، طراحی سایت در ارومیه ، ارومیه ، سایت ، وب سایت" />
            <link rel="canonical" href="http://ansaramman.ir" />
        </Helmet>

      {children}

    </Container>
  )
}

export default Template