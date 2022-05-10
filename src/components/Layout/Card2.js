import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  z-index: 10;
  overflow-y: auto;
  width: 100%;
  height: 100%;
  margin-top: 45px;
  padding: 20px;
  border: 1px solid #a5a5a5;
  border-radius: 10px;
  background: #fff;
  section {
    width: 100%;
    height: 100%;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Card = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Card;
