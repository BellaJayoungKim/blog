import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import Card2 from '../../components/Layout/Card2';
import MainMenu from '../../components/Menu/MainMenu';

import Card from '../../components/Layout/Card';
import SubMenu from '../../components/Menu/SubMenu';
import Sidebar from '../../components/Layout/Sidebar';
import Content from '../../components/Layout/Content';
import Toptitle from '../../components/Layout/Toptitle';
import DivBox from '../../components/Layout/DivBox';
import Intro from './Intro';

const Profile = () => {
  const match = useRouteMatch();
  const list = [
    {
      id: 1,
      title: '👩‍💻내 소개',
      url: '/intro',
      child: [
        { id: 1, title: '기본정보', url: '/default' },
      ],
    }
  ];

  return (
    <Layout>
      <Toptitle>
      </Toptitle>
      <DivBox>
      <MainMenu />

      <Sidebar>
        <Card>
          <SubMenu title="List" list={list} />
        </Card>
      </Sidebar>
      <Content>
        <Card2>
          <Switch>
            <Route exact path={`${match.path}`} component={Intro} />
            <Route exact path={`${match.path}/intro`} component={Intro} />
            <Route path={`${match.path}/intro/:type`} component={Intro} />
          </Switch>
        </Card2>
      </Content>
      </DivBox>
    </Layout>
  );
};

export default Profile;
