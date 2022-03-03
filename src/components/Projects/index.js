import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Timeline from 'components/ui/Timeline';
import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import FormatHtml from 'components/utils/FormatHtml';

const Projects = () => {
  const { markdownRemark, allMarkdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "projects section" } }) {
        frontmatter {
          title
          subtitle
        }
      }
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "projects" } } }
        sort: { order: DESC, fields: frontmatter___number }
      ) {
        edges {
          node {
            id
            html
            frontmatter {
              company
              type
              startDate
              endDate
              link
            }
          }
        }
      }
    }
  `);

  const sectionTitle = markdownRemark.frontmatter;
  const experiences = allMarkdownRemark.edges;

  return (
    <Container section>
      <TitleSection title={sectionTitle.title} subtitle={sectionTitle.subtitle} />

      {experiences.map((item) => {
        const {
          id,
          html,
          frontmatter: { company, type, startDate, endDate, link }
        } = item.node;

        return (
          <Timeline
            key={id}
            title={company}
            subtitle={type}
            content={<FormatHtml content={html} />}
            startDate={startDate}
            endDate={endDate}
            link={link}
          />
        );
      })}
    </Container>
  );
};

export default Projects;
