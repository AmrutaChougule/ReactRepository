import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
//import styled from "styled-components";

// const listItemStyle = styled.ul`
//   color: palevioletred;
//   display: block;
//   padding: 5px;
//   font-family: Helvetica, Arial, sans-serif;

//   &:hover {
//     text-decoration: underline;
//   }
//   &.active {
//     color: red;
//   }
//`;

const Header = () => {
  let appName = "Register User";
  let style = {
    color: "green",
    fontFamily: "cominc sans ms",
  };

  // const Link = ({ className, children }) => (
  //   <a className={className}>{children}</a>
  // );

  return (
    <div>
      <h1 style={style}>Welcome To {appName}</h1>
      <hr />
      <ul id="menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/form">Form </Link>
        </li>
        <li>
          <Link to="/reviewDetails">Review</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>

        <li>
          <Link to="/contacts">Contacts</Link>
        </li>
        <li>
          <Link to="/parent">Parent</Link>
        </li>

        {/* <listItemStyle>
          <Link to="/">Home</Link>
        </listItemStyle>
        <listItemStyle>
          <Link to="/form">Form </Link>
        </listItemStyle>
        <listItemStyle>
          <Link to="/reviewDetails">Review </Link>
        </listItemStyle>
        <listItemStyle>
          <Link to="/users">Users</Link>
        </listItemStyle>
        <listItemStyle>
          <Link to="/contacts">Contacts</Link>
        </listItemStyle>
        <listItemStyle>
          <Link to="/parent">Parent</Link>
        </listItemStyle> */}
      </ul>
    </div>
  );
};

export default Header;
