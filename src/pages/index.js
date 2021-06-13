import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

import HeroSection from "./../components/Reuseable/HeroSection";
import Infoblock from "../components/Reuseable/Infoblock";
import Dualinfoblock from "../components/Reuseable/Dualinfoblock";
import Coursecart from "../components/Cart/Coursecart";
import Bundlecart from "../components/Cart/Bundlecart";

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <HeroSection
      image={data.image.childImageSharp.fluid}
      title="i write code"
      subtitle="LearnCodeOnline.in"
      heroclass="hero-background"
    />
    <Infoblock heading="About Us" pageSrc="/about" />
    <Coursecart courses={data.mycourses} />
    <Dualinfoblock
      heading="Our Team"
      imageSrc="https://images.pexels.com/photos/3532558/pexels-photo-3532558.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    />
    <Bundlecart bundles={data.mybundles} />
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
    mycourses: allContentfulCourses {
      edges {
        node {
          id
          title
          category
          price
          description {
            description
          }
          image {
            fixed(width: 200, height: 120) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
    mybundles: allContentfulBundles {
      edges {
        node {
          id
          title
          price
          image {
            fixed(width: 200, height: 120) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
