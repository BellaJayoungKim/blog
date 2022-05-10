import React from 'react';
import styled from 'styled-components';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import Card from '../../components/Layout/Card';
import DivBox from '../../components/Layout/DivBox';
import Content2 from '../../components/Layout/Content2';
import Toptitle from '../../components/Layout/Toptitle';

const Settings = () => {
  const match = useRouteMatch();

  return (
    <Layout>
      <Toptitle>
      </Toptitle>
      <Content2>
        <Card>
         
        </Card>
      </Content2>
    </Layout>
  );
};

export default Settings;
