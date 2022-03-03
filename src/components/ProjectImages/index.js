import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';

import * as Styled from './styles';

const ProjectImages = () => {
  const { markdownRemark, allMarkdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "projectImages section" } }) {
        frontmatter {
          title
          subtitle
        }
      }
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "projectsImages" } } }
        sort: { order: DESC, fields: frontmatter___number }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              link
              cover {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const sectionTitle = markdownRemark.frontmatter;
  const projects = allMarkdownRemark.edges;

  return (
    <Container section>
      <TitleSection title={sectionTitle.title} subtitle={sectionTitle.subtitle} center />
      <Styled.Project>
        {projects.map((item) => {
          const {
            id,
            frontmatter: { title, cover, link }
          } = item.node;

          return (
            <a href={link} rel="noreferrer noopener" target="_blank" key={id}>
              <Img
                fluid={cover.childImageSharp.fluid}
                alt={title}
                css={`
                  max-height: 200px;
                `}
              />
            </a>
          );
        })}
      </Styled.Project>
    </Container>
  );
};

export default ProjectImages;
