import React from "react";
import { StaticQuery, graphql } from "gatsby";

import ServicePage from "../../components/service/service";

export default () => (
  <StaticQuery
    query={graphql`
      query paymentsQuery {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/\/payments\//" } }
        ) {
          edges {
            node {
              frontmatter {
                title
                path
                url
                logo
                tags
              }
              html
            }
          }
        }
      }
    `}
    render={data => (
      <ServicePage
        pageTitle="Services | Payments"
        pageHeader="Services"
        pageSubHeader="Payments"
        intro="You'll need cloud functions to work with their APIs, but these services are perfectly well suited for that."
        services={data.allMarkdownRemark.edges}
      />
    )}
  />
);
