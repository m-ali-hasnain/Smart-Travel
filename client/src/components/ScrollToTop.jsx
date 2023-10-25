import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { FloatingWhatsApp } from "react-floating-whatsapp";
export default function ScrollToTop() {
  const [scrollState, setScrollState] = useState(false);
  const toTop = () => {
    window.scrollTo({ top: 0 });
  };
  window.addEventListener("scroll", () => {
    window.pageYOffset > 200 ? setScrollState(true) : setScrollState(false);
  });
  return (
    <>
    <div className="flex">
    <FloatingWhatsApp
            phoneNumber="+923335568883"
            chatMessage="Hello World!!!"
            messageDelay="2"
            accountName="AQ INNOVATIONS"
          />
    {/* <ToTop onClick={toTop} scrollState={scrollState}>
      <img src={logo} alt="" />
    </ToTop> */}
    </div>
    </>
  );
}

const ToTop = styled.div`
  display: ${({ scrollState }) => (scrollState ? "block" : "none")};
  position: fixed;
  cursor: pointer;
  z-index: 10;
  bottom: 1rem;
  right: 2rem;
  img {
    height: 1.5rem;
  }
  border-radius: 2rem;
  background-color: #1900ff39;
  padding: 1rem;
`;
