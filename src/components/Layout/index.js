import React from 'react';
import PropTypes from 'prop-types';
import loadable from '@loadable/component';
import { useStaticQuery, graphql } from 'gatsby';
import { motion, AnimatePresence } from 'framer-motion';

import 'assets/styles/global.css';
import GlobalStyles from 'assets/styles/globalStyles';
import * as Styled from './styles';

import Header from 'components/Header';
// import Footer from 'components/Footer';
// import ScrollToTop from 'components/ui/ScrollButton';
import Loader from '../ui/loader';

const Footer = loadable(() => import('components/Footer'), {
  fallback: <Loader />
});

const ScrollToTop = loadable(() => import('../ui/ScrollButton'), {
  fallback: <Loader />
});

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <GlobalStyles />
      <AnimatePresence exitBeforeEnter>
        <Styled.Layout>
          <Header siteTitle={data.site.siteMetadata.title} />
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.2 }}
          >
            {children}
            <Footer />
          </motion.div>
          <ScrollToTop showBelow={160} />
        </Styled.Layout>
      </AnimatePresence>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.any.isRequired
};

export default Layout;
