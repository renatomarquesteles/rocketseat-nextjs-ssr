import React from 'react';

import Link from 'next/link';
import Head from 'next/head';

import withAnalytics from '../src/hocs/withAnalytics';

const Home = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>
    <img src="/images/city.jpg" width="800" />
    <h1>Hello World</h1>
    <Link href="/users">
      <a>Users</a>
    </Link>
  </>
);

export default withAnalytics()(Home);
