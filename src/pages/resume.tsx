import React from 'react';
import loadable from '@loadable/component';

import Loader from '../components/ui/loader';
import Layout from 'components/Layout';
import SEO from 'components/SEO';
// import Projects from 'components/Projects';
// import Education from 'components/Education';
// import Skills from 'components/Skills';
// import ContactForm from 'components/ContactForm';

const Projects = loadable(() => import('components/Projects'), {
  fallback: <Loader />
});
const Education = loadable(() => import('components/Education'), {
  fallback: <Loader />
});
const Skills = loadable(() => import('components/Skills'), {
  fallback: <Loader />
});
const ContactForm = loadable(() => import('components/ContactForm'), {
  fallback: <Loader />
});

const ResumePage: React.FC = () => (
  <Layout>
    <SEO title="Resume" />
    <Projects />
    <hr />
    <Education />
    <hr />
    <Skills />
    <ContactForm />
  </Layout>
);

export default ResumePage;
