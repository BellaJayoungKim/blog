import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { setColor } from '../../../module/palette';

const Wrapper = styled.div`
  width: 100%;
  padding: 10px;
  border: 1px solid #a5a5a5;
  background: ${props => props.color};
  & > div:not(:last-of-type) {
    display: inline-block;
  }
  & > div:nth-child(2) {
    width: 55%;
  }
`;

const WhiteWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  border: 1px solid #a5a5a5;
  background: #fff;
`;

const SwatchWrapper = styled.div`
  display: flex;
`;

const SwatchInfo = styled.div`
  padding: 5px;
  p {
    font-size: 0.8rem;
  }
`;

const Colors = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 15px 0 3px;
`;

const Color = styled.li`
  width: 25px;
  height: 25px;
  background: ${props => props.color};
  cursor: pointer;
`;

const Palette = ({ target, hexColor, setHexColor }) => {
  const dispatch = useDispatch();
  const { palette } = useSelector(state => state);

  // hexColor 변경
  const handleColor = useCallback(color => {
    setHexColor(color);
    dispatch(
      setColor({
        key: target,
        value: color,
      }),
    );
  }, []);

  return (
    <Wrapper color={palette[target]['color']}>
      <WhiteWrapper>
        <SwatchWrapper>
          <SwatchInfo>
            <p>{palette[target]['title']}</p>
          </SwatchInfo>
        </SwatchWrapper>
        <ColorBook handleColor={handleColor} />
      </WhiteWrapper>
    </Wrapper>
  );
};

const ColorBook = ({ handleColor }) => {
  const colors = [
    '#ffa8a8',
    '#ff6b6b',
    '#faa2c1',
    '#845ef7',
    '#d0ebff',
    '#339af0',
    '#c3fae8',
    '#ffe066',
    '#fcc419',
    '#ffe8cc',
    '#ffc078',
    '#ff922b',
    
  ];

  return (
    <Colors>
      {colors.map((color, index) => (
        <Color
          key={index}
          color={color}
          onClick={() => {
            handleColor(color)
          }}
        ></Color>
      ))}
    </Colors>
  );
};

export default React.memo(Palette);
