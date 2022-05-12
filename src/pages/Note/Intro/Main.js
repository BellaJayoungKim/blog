import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 10px 0;
  font-family: serif;
  font-weight: bold;
  img {
    width: 100%;
    margin: 5px 0;
  }
`;

const Main = () => {
  return (
    <Wrapper>
      <img src={process.env.PUBLIC_URL + '/resources/img/commingsoon.PNG'} alt="selfie" />
    </Wrapper>
  );
};

export default Main;
