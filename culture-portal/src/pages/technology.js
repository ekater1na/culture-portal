import React from 'react';
import '../i18n/i18n';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';
import Layout from '../components/base/Layout';
import Technology from '../../static/img/technology.png';
import Header from '../components/base/Header';

const bounceAnimation = keyframes`${fadeIn}`;
const BouncyDiv = styled.div`
  animation: 1.5s ${bounceAnimation};
`;

export default () => (
  <main className="app">
    <Header />
    <Layout>
      <BouncyDiv>
        <div className="technology-page" style={{ overflow: 'hidden' }}>
          <img
            src={Technology}
            alt="Technology diagram"
            style={{ display: 'block', margin: 'auto' }}
          />
        </div>
      </BouncyDiv>
    </Layout>
  </main>
);
