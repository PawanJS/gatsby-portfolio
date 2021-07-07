import React from 'react';
import loadable from '@loadable/component';

import Loader from '../components/ui/loader';
import Layout from 'components/Layout';
import SEO from 'components/SEO';
// import HeroBanner from 'components/HeroBanner';
// import Services from 'components/Services';
// import Testimonials from 'components/Testimonials';
// import ContactForm from 'components/ContactForm';

const HeroBanner = loadable(() => import('components/HeroBanner'), {
  fallback: <Loader />
});
const Projects = loadable(() => import('components/ProjectImages'), {
  fallback: <Loader />
});
const Services = loadable(() => import('components/Services'), {
  fallback: <Loader />
});
const Testimonials = loadable(() => import('components/Testimonials'), {
  fallback: <Loader />
});
const ContactForm = loadable(() => import('components/ContactForm'), {
  fallback: <Loader />
});

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="About Me" />
      <HeroBanner />
      <Projects />
      <Services />
      <hr />
      <Testimonials />
      <ContactForm />
    </Layout>
  );
};

export default IndexPage;
