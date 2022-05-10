const SET_COLOR = 'palette/SET_COLOR';

export const setColor = payload => ({ type: SET_COLOR, payload });

const initialState = {
  bg: {
    title: '배경',
    color: 'white',
  },
  layoutBg1: {
    title: '배경2 및 메뉴',
    color: '#6438e5',
  },
  layoutBorder2: {
    title: '타이틀 및 점선',
    color: 'yellow',
  },
};

export default function palette(state = initialState, action) {
  switch (action.type) {
    case SET_COLOR:
      const { key, value } = action.payload;
      return {
        ...state,
        [key]: {
          ...state[key],
          color: value,
        },
      };
    default:
      return state;
  }
}
