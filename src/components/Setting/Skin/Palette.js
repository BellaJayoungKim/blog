import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { setColor } from '../../../module/palette';
import { getRandomHexColor } from '../../../utils/utils';

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

const Button = styled.button`
  height: 18px;
  margin-right: 3px;
  padding: 0 5px;
  line-height: 18px;
  font-weight: bold;
  font-size: 0.8rem;
  outline: 0;
  cursor: pointer;
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
  const handleHexColor = useCallback(color => {
    setHexColor(color);
  }, []);

  // 스와치(input[type=color]) 컬러 변경

  // 리덕스 스토어 palette 컬러 변경
  const changePaletteColor = () => {
    dispatch(
      setColor({
        key: target,
        value: hexColor,
      }),
    );
  };

  return (
    <Wrapper color={palette[target]['color']}>
      <WhiteWrapper>
        <SwatchWrapper>
ㄴ          <SwatchInfo>
            <p>{palette[target]['title']}</p>
              <Button type="button" onClick={changePaletteColor}>
                확인
              </Button>
          </SwatchInfo>
        </SwatchWrapper>
        <ColorBook handleHexColor={handleHexColor} />
      </WhiteWrapper>
    </Wrapper>
  );
};

const ColorBook = ({ handleHexColor }) => {
  const colors = [
    '#ffa8a8',
    '#ff6b6b',
    '#faa2c1',
    '#e5dbff',
    '#845ef7',
    '#d0ebff',
    '#339af0',
    '#c3fae8',
    '#ffe066',
    '#fcc419',
    '#ffe8cc',
    '#ffc078',
    '#ff922b',
    '#f1f3f5',
    '#dee2e6',
    '#ced4da',
    '#343a40',
    '#212529',
  ];

  return (
    <Colors>
      {colors.map((color, index) => (
        <Color
          key={index}
          color={color}
          onClick={() => {
            handleHexColor(color)
          }}
        ></Color>
      ))}
    </Colors>
  );
};

export default React.memo(Palette);
