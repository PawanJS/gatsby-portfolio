import React from 'react';
import loadable from '@loadable/component';

import Loader from '../components/ui/loader';
import Layout from 'components/Layout';
import SEO from 'components/SEO';
// import Posts from 'components/Posts';
// import Newsletter from 'components/Newsletter';

const Posts = loadable(() => import('components/Posts'), {
  fallback: <Loader />
});

const Newsletter = loadable(() => import('components/Newsletter'), {
  fallback: <Loader />
});

const BlogPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Blog" />
      <Posts />
      <Newsletter />
    </Layout>
  );
};

export default BlogPage;
