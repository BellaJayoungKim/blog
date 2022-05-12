import React, { useState } from 'react';
import styled from 'styled-components';
import Palette from './Palette';

const Wrapper = styled.div`
  margin-top: 10px;
  background: #eee;
`;

const ToggleHeader = styled.div`
  display: flex;
  justify-content: space-between;
  h2 {
    font-weight: bold;
  }
`;

const ToggleContent = styled.div`
  display: ${props => (props.isOpen ? 'flex' : 'none')};
  padding-top: 10px;
`;

const ChangeSkin = () => {
  //const [isOpen, setIsOpen] = useState(true);
  const [target, setTarget] = useState('bg');
  const [hexColor, setHexColor] = useState('#ffc9c9');

  return (
    <Wrapper>
      <ToggleHeader>
        <h2>환경설정</h2>
      </ToggleHeader>
      <ToggleContent isOpen={'true'}>
       
        <Palette
          target={'bg'}
          hexColor={hexColor}
          setHexColor={setHexColor}
        />
      </ToggleContent>
      <ToggleHeader>
      </ToggleHeader>
      <ToggleContent isOpen={'true'}>
        <Palette
          target={'layoutBg1'}
          hexColor={hexColor}
          setHexColor={setHexColor}
        />
      </ToggleContent>
      <ToggleHeader>
      </ToggleHeader>
      <ToggleContent isOpen={'true'}>
        <Palette
          target={'layoutBorder2'}
          hexColor={hexColor}
          setHexColor={setHexColor}
        />
      </ToggleContent>
    </Wrapper>
  );
};

export default React.memo(ChangeSkin);
