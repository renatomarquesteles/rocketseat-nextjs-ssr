import React from 'react';
import axios from 'axios';
import Link from 'next/link';
import Head from 'next/head';
import styled from 'styled-components';

import withAnalytics from '../src/hocs/withAnalytics';

import { GlobalStyle, Container } from '../src/styles/global';

const Content = styled.div`
  padding: 10px 15px;
  display: flex;
  flex-direction: column;

  h1 {
    padding: 5px 0;
    font-size: 40px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }

  img {
    margin-top: 20px;
    max-width: 200px;
  }

  nav {
    margin-top: 40px;
    font-size: 20px;
    text-decoration: underline;
  }

  button {
    width: 200px;
    font-size: 20px;
    margin-top: 10px;
  }
`;

const Detail = ({ user }) => (
  <Container>
    <Head>
      <title>Users - {user.login}</title>
    </Head>
    <img src="/images/glasses.jpg" />
    <Content>
      <h1>{user.login}</h1>
      <img src={user.avatar_url} width="200" />
      <a href={user.html_url}>
        <button type="button">Visit GitHub Profile</button>
      </a>
      <nav>
        <Link href="/users">
          <a>Voltar</a>
        </Link>
      </nav>
    </Content>

    <GlobalStyle />
  </Container>
);

Detail.getInitialProps = async ({ query }) => {
  const response = await axios.get(
    `https://api.github.com/users/${query.user}`
  );

  return { user: response.data };
};

export default withAnalytics()(Detail);
