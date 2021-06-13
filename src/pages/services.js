import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

import HeroSection from "../components/Reuseable/HeroSection";
import IconCards from "../components/Services/IconCards";
import DualinfoblockService from "../components/Services/DualinfoBlockService";

const ServicePage = ({ data }) => (
  <Layout>
    <Seo title="Service" />
    <HeroSection
      image={data.image.childImageSharp.fluid}
      title="Service we offer"
      subtitle=""
      heroclass="about-background"
    />
    <IconCards />
    <DualinfoblockService />
  </Layout>
);

export const query = graphql`
  {
    image: file(relativePath: { eq: "heromain.png" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 250) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default ServicePage;
