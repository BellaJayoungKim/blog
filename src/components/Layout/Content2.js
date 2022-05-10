import React from 'react';
import styled from 'styled-components';
import MainMenu from '../Menu/MainMenu';

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  height: 100%;
  h1 {
    color: white;
    font-weight: bold;
    font-size: 1.1rem;
  }
`;

const Content2 = ({ children }) => {
  return (
    <ContentWrapper>
      {children}
      <MainMenu />
    </ContentWrapper>
  );
};

export default Content2;
