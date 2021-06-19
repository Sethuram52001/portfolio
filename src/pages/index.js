import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/layout";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import Blogs from "../components/Blogs/Blogs";
import Certifications from "../components/Certifications/Certfications";
import Education from "../components/Education/Education";
import Experience from "../components/Experience/Experience";
import Navbar from "../components/Navbar/Navbar";
import ContactMe from "../components/ContactMe/ContactMe";
import Main from "../components/Main/Main";

const IndexPage = () => (
  <>
  <Navbar />
  <Layout>
    <Main>
      <About />
      <Skills />
      <Projects />
      <Blogs />
      <Certifications />
      <Education />
      <Experience />
      <ContactMe />
    </Main>
  </Layout>
  </>
)

export default IndexPage