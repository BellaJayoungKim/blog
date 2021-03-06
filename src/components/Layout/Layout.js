import React from 'react';
import styled from 'styled-components';
import Setting from '../Setting';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background: ${props => props.theme.bg.color};
`;

const BorderWrapper = styled.div`
  width: 78%;
  height: 95vh;
  padding: 25px;
  background: ${props => props.theme.layoutBg1.color};
  border: 1px solid white;
  border-radius: 10px;
`;

const BgWrapper = styled.div`
  z-index: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 20px 8px 8px;
  background: transparents;
  border: 2px dashed ${props => props.theme.layoutBorder2.color};
  border-radius: 10px;
`;

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <BorderWrapper>
        <BgWrapper>{children}</BgWrapper>
      </BorderWrapper>
      <Setting />
    </Wrapper>
  );
};

export default Layout;
