import React from "react";
import Image from "next/image";
import Link from "next/link";
import STYLED from "styled-components";

const ShareOnLinkedIn = () => {
  return (
    <Link href={"/"}>
      <SECTION className={`BubbleEff`}>
        <span> Share On LinkedIn</span>
        <Image
          src={"/icons/LinkedinIcon.svg"}
          height={20}
          width={20}
          alt="linkedin icon"
        />
      </SECTION>
    </Link>
  );
};

const SECTION = STYLED.section`
border: 1px solid #fff;
padding: 0.3em 0.8em;
font-size: 12px;
border-radius: 0.25em;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
gap: 5px;
background-color: #fff;
color: #232323;
font-weight: 500;
`;

export default ShareOnLinkedIn;