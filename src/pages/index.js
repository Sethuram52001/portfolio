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
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const IndexPage = () => (
  <Layout>
    <Navbar />
    <About />
    <Skills />
    <Projects />
    <Blogs />
    <Certifications />
    <Education />
    <Experience />
    <Footer />
  </Layout>
)

export default IndexPage

    {/* <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    /> */}