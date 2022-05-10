import React from 'react';
import styled from 'styled-components';

const ToptitleBlock = styled.div`
  align-items: center;
  width: 100%;
  height: 45px;
  margsin-right: 8px;
  h1 {
    font-weight: bold;
    color: ${props => props.theme.layoutBorder2.color}
  }
`;

const Toptitle = ({ children }) => {
  return (
    <ToptitleBlock>
      <h1>KIM JA YOUNG - BLOG</h1>
      {children}
    </ToptitleBlock>
  );
};

export default Toptitle;
