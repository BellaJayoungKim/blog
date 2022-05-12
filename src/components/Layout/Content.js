import React from 'react';
import styled from 'styled-components';

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  height: 96%;
  h1 {
    color: white;
    font-weight: bold;
    font-size: 1.1rem;
  }
`;

const Content = ({ children }) => {
  return (
    <ContentWrapper>
      {children}
      
    </ContentWrapper>
  );
};

export default Content;
