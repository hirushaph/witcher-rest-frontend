import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import styled from "styled-components";
import { IconContext } from "react-icons";

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin-top: 30px;
`;

function AppLayout() {
  return (
    <IconContext.Provider value={{ className: "react-icons" }}>
      <div>
        <Header />

        <main>
          <MainContainer className="container">
            <Outlet />
            <Sidebar />
          </MainContainer>
        </main>
      </div>
    </IconContext.Provider>
  );
}

export default AppLayout;
