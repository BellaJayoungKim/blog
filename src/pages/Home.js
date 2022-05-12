import { React, useState } from 'react';
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
  MdLocationOn
} from 'react-icons/md';

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
        height: 150px;
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
  &
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
`;

const Notebook = styled.input`
  color: #000;
  font-size: 1em;
  border: 1px solid purple;
  border-radius: 3px;
  margin-bottom: 5px;
  height:40px;
  width: 80%;
`;

const AddButton = styled.button`
  color: #000 ;
  font-size: 1em;
  border: 1px solid purple;
  border-radius: 3px;
  margin-left:5px;
  margin-bottom: 5px;
  height:40px;
  width: 90px;
`;

const Home = () => {

  let [sentence, setSentence] = useState(['안녕하세요', '잘보고 갑니다~']);
  let [newInput, setNewInput] = useState('');
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
              <img src={process.env.PUBLIC_URL + '/resources/img/flower1.jpg'} alt="profile" />
            </ProfileSection>
              <div>
                <div className="my-name">방문해주셔서 감사합니다.</div>
                <br></br>
              </div>
              <div>
                <MdLocationOn />
                위치
              </div>
          </FlexWrapper>
        </Card>
      </Sidebar>
      <Content>
        <Card2>
          <ContentSection>
            <div>
              <img
                src={process.env.PUBLIC_URL + '/resources/img/secondBackgroung.png'}
              />
            </div>
          </ContentSection>
          <ContentSection>
            <h2>한줄 남기기</h2>
            <Notebook onChange={(e) => {setNewInput(e.target.value)} }></Notebook>
            <AddButton onClick={() => {
                let newSentence = [...sentence];
                newSentence.unshift(newInput);
                  setSentence(newSentence);
              }}> 등록 </AddButton>
            <ul>
              {
                sentence.map(function(data, i) { //반복문을 쓸때는 key를 써야함 
                  return ( 
                    <li>{data}</li>
                  )
                })
              }
            </ul>
          </ContentSection>
        </Card2>
      </Content>
      </DivBox>
    </Layout>
  );
};
export default Home;
