import React from 'react';
import Main from './Main';

const Intro = ({ match }) => {
  let { type } = match.params;
  type = type ? type : 'main';

  const intros = [
    {
      type: 'main',
      component: <Main />,
    }
  ];
  const { component } = intros.find(item => item.type === type);

  return <>{component}</>;
};

export default Intro;
