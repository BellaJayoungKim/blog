import React from 'react';
import styled from 'styled-components';

const DivBoxComp = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  height: 100%;
`;

const DivBox = ({ children }) => {
  return (
    <DivBoxComp>
      {children}
    </DivBoxComp>
  );
};

export default DivBox;
