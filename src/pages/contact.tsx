import React from 'react';
import loadable from '@loadable/component';

import Loader from '../components/ui/loader';
import Layout from 'components/Layout';
import SEO from 'components/SEO';
// import ContactInfo from 'components/ContactInfo';
// import ContactForm from 'components/ContactForm';

const ContactInfo = loadable(() => import('components/ContactInfo'), {
  fallback: <Loader />
});
const ContactForm = loadable(() => import('components/ContactForm'), {
  fallback: <Loader />
});

const ContactPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <ContactInfo />
      <ContactForm />
    </Layout>
  );
};

export default ContactPage;
