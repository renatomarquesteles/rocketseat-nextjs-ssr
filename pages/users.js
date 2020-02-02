import React from 'react';
import axios from 'axios';
import Link from 'next/link';
import Head from 'next/head';
import styled from 'styled-components';

import withAnalytics from '../src/hocs/withAnalytics';

import { GlobalStyle, Container } from '../src/styles/global';

const Content = styled.div`
  padding: 10px 15px;
  font-size: 20px;

  h1 {
    padding: 5px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }

  ul {
    margin-top: 15px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  nav {
    margin-top: 40px;
    text-decoration: underline;
  }
`;

const User = ({ users }) => (
  <Container>
    <Head>
      <title>Users</title>
    </Head>
    <img src="/images/glasses.jpg" />
    <Content>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link href={`/users/${user.login}`}>
              <a>{user.login}</a>
            </Link>
          </li>
        ))}
      </ul>
      <nav>
        <Link href="/">
          <a>Voltar</a>
        </Link>
      </nav>
    </Content>

    <GlobalStyle />
  </Container>
);

User.getInitialProps = async () => {
  const response = await axios.get(
    'https://api.github.com/orgs/facebook/members'
  );

  return { users: response.data };
};

export default withAnalytics()(User);
