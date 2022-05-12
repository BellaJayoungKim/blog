import React from 'react';
import styled from 'styled-components';

const Toptitlearea = styled.div`
  align-items: center;
  width: 100%;
  height: 45px;
  margsin-right: 8px;
  h3 {
    font-weight: bold;
    color: ${props => props.theme.layoutBorder2.color}
  }
`;

const Toptitle = ({ children }) => {
  return (
    <Toptitlearea>
      <h3>JA YOUNG's BLOG</h3>
      {children}
    </Toptitlearea>
  );
};

export default Toptitle;
