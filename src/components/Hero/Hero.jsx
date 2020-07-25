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
      <h1>Gatsby Starter Lamma</h1>
      <p>Best dark themed blog to kickstart.</p>
    </Container>
  );
};

export default Hero;
