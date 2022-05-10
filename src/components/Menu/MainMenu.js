import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Nav = styled.nav`
  z-index: -1;
  position: absolute;
  top: 70px;
  right: -70px;
    a {
      display: inline-block;
      width: 85px;
      height: 40px;
      margin-bottom: 2px;
      padding: 10px 10px 10px 15px;
      background: ${props => props.theme.layoutBg1.color};
      border: 1px solid #a5a5a5;
      border-radius: 10px;
      color: #fff;
      font-size: 0.9rem;
      text-align: center;
      &.selected {
        background: #fff;
        color: #333;
      }
  }
`;

function MainMenu() {
  return (
    <Nav>
          <NavLink exact to="/" activeClassName="selected">
            Home
          </NavLink>
          <NavLink to="/Note" activeClassName="selected">
            게시판
          </NavLink>
    </Nav>
  );
}

export default MainMenu;
