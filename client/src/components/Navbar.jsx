import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
export default function Navbar() {
  const [navbarState, setNavbarState] = useState(false);
  return (
    <>
      <Nav>
        <div className="brand">
          <a style={{ textDecoration: "none", color: "black" }} href="/">
            <div className="container">
              <img
                style={{ width: "50px", height: "50px" }}
                src={logo}
                alt=""
              />
              Smart Travel
            </div>
          </a>
          <div className="toggle">
            {navbarState ? (
              <VscChromeClose onClick={() => setNavbarState(false)} />
            ) : (
              <GiHamburgerMenu onClick={() => setNavbarState(true)} />
            )}
          </div>
        </div>

        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/packages">Packages</a>
          </li>
          <li>
            <a href="/reviews">Reviews</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/admin/signin">Admin Login</a>
          </li>
        </ul>
        {/* <button >Contact Us</button> */}
      </Nav>
      <ResponsiveNav state={navbarState}>
        <ul>
          <li>
            <a href="/" onClick={() => setNavbarState(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="/about" onClick={() => setNavbarState(false)}>
              About
            </a>
          </li>
          <li>
            <a href="/packages" onClick={() => setNavbarState(false)}>
              Packages
            </a>
          </li>
          <li>
            <a href="/reviews" onClick={() => setNavbarState(false)}>
              Reviews
            </a>
          </li>
          <li>
            <a href="/contact" onClick={() => setNavbarState(false)}>
              Contact
            </a>
          </li>
          <li>
            <a href="/admin/signin">Admin Login</a>
          </li>
        </ul>
      </ResponsiveNav>
    </>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .brand {
    .container {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.4rem;
      font-size: 1.2rem;
      font-weight: 900;
      text-transform: uppercase;
    }
    .toggle {
      display: none;
    }
  }
  ul {
    display: flex;
    gap: 2rem;
    list-style-type: none;
    li {
      a {
        text-decoration: none;
        color: black;
        font-size: 1.2rem;
        transition: 0.1s ease-in-out;
        &:hover {
          color: orange;
        }
      }
      &:first-of-type {
        a {
          color: orange;
          font-weight: 900;
        }
      }
    }
  }
  button {
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 1rem;
    border: none;
    color: white;
    background-color: #48cae4;
    font-size: 1.1rem;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    transition: 0.3s ease-in-out;
    &:hover {
      background-color: #023e8a;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .brand {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      .toggle {
        display: block;
      }
    }
    ul {
      display: none;
    }
    button {
      display: none;
    }
  }
`;

const ResponsiveNav = styled.div`
  display: flex;
  position: absolute;
  z-index: 1;
  top: ${({ state }) => (state ? "50px" : "-400px")};
  background-color: white;
  height: 30vh;
  width: 100%;
  align-items: center;
  transition: 0.3s ease-in-out;
  ul {
    list-style-type: none;
    width: 100%;
    li {
      width: 100%;
      margin: 1rem 0;
      margin-left: 2rem;

      a {
        text-decoration: none;
        color: #0077b6;
        font-size: 1.2rem;
        transition: 0.1s ease-in-out;
        &:hover {
          color: #023e8a;
        }
      }
      &:first-of-type {
        a {
          color: #023e8a;
          font-weight: 900;
        }
      }
    }
  }
`;
