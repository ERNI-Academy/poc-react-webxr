import React from "react";
import Container from "../common/Container/Container";
import Logo from "../common/Logo/Logo";

const MainLayout = ({ children }) => {
  return (
    <Container>
      <Logo />
      {children}
    </Container>
  );
};

export default MainLayout;
