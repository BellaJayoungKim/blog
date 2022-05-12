
/* 액션 타입 만들기 */
// Ducks 패턴을 따를땐 액션의 이름에 접두사를 넣어주세요.
// 이렇게 하면 다른 모듈과 액션 이름이 중복되는 것을 방지 할 수 있습니다.
const SET_COLOR = 'palette/SET_COLOR';


export const setColor = payload => ({ type: SET_COLOR, payload });
/* 리덕스에서 관리 할 상태 정의 */
const initialState = {
  bg: {
    title: '전체배경',
    color: 'white',
  },
  layoutBg1: {
    title: '내부배경 및 목차글씨',
    color: '#6438e5',
  },
  layoutBorder2: {
    title: '타이틀 및 점선',
    color: 'yellow',
  },
};
/* 리듀서 선언 */
// 리듀서는 export default 로 내보내주세요.
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
