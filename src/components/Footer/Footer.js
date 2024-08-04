import React from "react";
import styled from "@emotion/styled";
import img4 from "./../../img/footer-bg2.png"


const FooterSection = styled.div`
  background-image: url(${img4});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 200px;
  position: relative;
  z-index:-1;

  span {
    position: absolute;
    bottom: 4rem;
    color: #fff;

    a {
      text-decoration: underline;
    }
  }
`;
function Footer() {
  return (
    <FooterSection>
      <div className="Container"/>
    </FooterSection>
  );
}

export default Footer;
