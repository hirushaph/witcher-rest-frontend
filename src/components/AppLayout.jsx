import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import styled from "styled-components";

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 60px;
`;

const Main = styled.main`
  margin-top: 30px;
`;

const StyledAppLayout = styled.div`
  overflow: hidden;
  margin-bottom: 30px;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Main>
        <MainContainer className="container">
          <Outlet />
          <Sidebar />
        </MainContainer>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
