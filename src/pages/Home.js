import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout/Layout';
import Sidebar from '../components/Layout/Sidebar';
import Content from '../components/Layout/Content';
import Card from '../components/Layout/Card';
import Card2 from '../components/Layout/Card2';
import Toptitle from '../components/Layout/Toptitle';
import DivBox from '../components/Layout/DivBox';
import MainMenu from '../components/Menu/MainMenu';

import {
  MdLocationOn,
  MdPhoneIphone,
} from 'react-icons/md';
import { publicUrl } from '../utils/utils';

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const ContentSection = styled.section`
  height: fit-content !important;
  h2 {
    padding: 5px;
    margin-bottom: 10px;
    font-weight: bold;
    color: ${props => props.theme.layoutBg1.color};
  }
  &:first-of-type {
    h2 {
      margin-bottom: 5px;
    }
    div {
      width: 100%;
      min-height: 200px;
      img {
        width: 100%;
      }
    }
  }
  &:last-of-type {
    margin-top: 20px;
    h2 {
      margin-bottom: 15px;
      border-bottom: 2px solid #eee;
    }
  }
  ul {
    line-height: 1.8;
    li {
      height: 30px;
      border-bottom: 1px dashed #a5a5a5;
    }
  }
`;

const ProfileSection = styled.section`
  height: fit-content !important;
  &:last-of-type {
    padding: 10px 0;
    border-top: 1px dashed #a5a5a5;
    p {
      display: flex;
      align-items: center;
      margin: 10px 0;
    }
    svg {
      margin-right: 3px;
      color: #666;
    }
  }
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  .my-name {
    margin-right: 5px;
    color: ${props => props.theme.layoutBg1.color};
    font-size: 1rem;
    font-weight: bold;
  }
  .my-sex,
  .my-brthdy {
    color: #9e9e9e;
    font-size: 0.85rem;
  }
  .my-sex {
    margin-right: 2px;
    font-size: 0.8rem;
  }
`;

const Home = () => {

  return (
    <Layout>
      <Toptitle>
      </Toptitle>
      <DivBox>
      <MainMenu />
      <Sidebar>
        <Card>
          <FlexWrapper>
            {/* 프로필영역  */}
            <ProfileSection>
              <img src={publicUrl + '/resources/img/flower1.jpg'} alt="profile" />
            </ProfileSection>
            <ProfileSection>
              <p>
                <span className="my-name">김자영</span>
                <span className="my-sex">(♀)</span>
                <span className="my-brthdy">1990.07.11</span>
              </p>
              <p>
                <MdPhoneIphone />
                010-0000-0000
              </p>
              <p>
                <MdLocationOn />
                서울시 은평구
              </p>
            </ProfileSection>
          </FlexWrapper>
        </Card>
      </Sidebar>
      <Content>
        <Card2>
          <ContentSection>
            <div>
              <img
                src={publicUrl + '/resources/img/miniroom.gif'}
              />
            </div>
          </ContentSection>
          <ContentSection>
            <h2>한 줄 감성</h2>
            <ul>
              <li>싸이월드 미니홈피 감성으로 기획, 개발했습니다~☆</li>
              <li>프로필 페이지를 구경해주세요~☆</li>
              <li>배경도 바꿀 수 있답니다~☆</li>
              <li></li>
              <li></li>
            </ul>
          </ContentSection>
        </Card2>
      </Content>
      </DivBox>
    </Layout>
  );
};
export default Home;
