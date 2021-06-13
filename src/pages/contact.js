import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

import HeroSection from "./../components/Reuseable/HeroSection";
import Infoblock from "../components/Reuseable/Infoblock";
import Contact from "../components/Contact/Contact";

const ContactPage = ({ data }) => {
  return (
    <Layout>
      <Seo title="Contact Us" />
      <HeroSection
        image={data.image.childImageSharp.fluid}
        title="Contact us"
        subtitle=""
        heroclass="about-background"
      />
      <Infoblock heading="How can we help ?" pageSrc="/about" />
      <Contact />
    </Layout>
  );
};

export const query = graphql`
  {
    image: file(relativePath: { eq: "contact.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default ContactPage;
