import React from "react";
import styled from "styled-components";
const Container = styled.section`
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Hero = () => {
  return (
    <Container>
      <h1>Lamma</h1>
      <h2>— Minimal, Elegant, Dark Theme Blog Starter</h2>
      <p>Best dark themed blog to kickstart.</p>
    </Container>
  );
};

export default Hero;
