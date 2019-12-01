import React from "react";
import styled from "styled-components";

const Head = styled.header`
  padding: 20px;
  display: flex;
  background-color: #007fff;
  font-weight: 600;
  align-items: center;
  color: white;
`;

export default function Header() {
  return <Head>Github Take Home Challenge</Head>;
}
