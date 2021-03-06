import React from 'react';
import '../i18n/i18n';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';
import Header from '../components/base/Header';
import Layout from '../components/base/Layout';
import DevelopersList from '../components/DevelopersList/DevelopersList';

const bounceAnimation = keyframes`${fadeIn}`;
const BouncyDiv = styled.div`
  animation: 1.5s ${bounceAnimation};
`;


export default () => (
  <main className="app">
    <Header />
    <Layout>
      <div className="team-page">
        <BouncyDiv>
          <DevelopersList />
        </BouncyDiv>
      </div>
    </Layout>
  </main>
);
