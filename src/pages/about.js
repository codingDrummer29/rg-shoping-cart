import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

import HeroSection from "./../components/Reuseable/HeroSection";
import Infoblock from "../components/Reuseable/Infoblock";
import Dualinfoblock from "../components/Reuseable/Dualinfoblock";
import Teamphotosection from "../components/About/Teamphotosection";

const AboutPage = ({ data }) => (
  <Layout>
    <Seo title="About Us" />
    <HeroSection
      image={data.image.childImageSharp.fluid}
      title="learn about us"
      subtitle=""
      heroclass="about-background"
    />
    <Dualinfoblock
      heading="A Word From CEO"
      imageSrc="https://images.pexels.com/photos/1739942/pexels-photo-1739942.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    />
    <Infoblock heading="About Vision" pageSrc="/about" />
    <Teamphotosection />
  </Layout>
);

export const query = graphql`
  {
    image: file(relativePath: { eq: "about.png" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 250) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default AboutPage;
