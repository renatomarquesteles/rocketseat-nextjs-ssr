import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styled from 'styled-components';

import withAnalytics from '../src/hocs/withAnalytics';

import { GlobalStyle, Container } from '../src/styles/global';

const Content = styled.div`
  padding: 10px 15px;

  h1 {
    font-size: 40px;
  }

  nav {
    padding: 10px 15px;
    margin: 10px 0;

    a {
      font-weight: bold;
      font-size: 24px;
    }
  }
`;

const Home = () => (
  <Container>
    <Head>
      <title>Home</title>
    </Head>
    <img src="/images/glasses.jpg" />
    <Content>
      <h1>Home Page</h1>
      <nav>
        <Link href="/users">
          <a>View Users</a>
        </Link>
      </nav>
    </Content>

    <GlobalStyle />
  </Container>
);

export default withAnalytics()(Home);
