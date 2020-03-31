import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default () => (
  <Layout>
    <h1>Home</h1>
    <p>Hello San Francisco!</p>
    <Link to="/about/">Learn About me! &rarr;</Link>
  </Layout>
);
