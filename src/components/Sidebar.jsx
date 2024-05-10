import styled from "styled-components";

const StyledSidebar = styled.div`
  border: 1px solid red;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Table = styled.table`
  border: 1px solid red;
  width: 100%;
  margin-top: 10px;
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <ImageContainer>
        <img src="/garelt.jpg" alt="" width="180px" />
      </ImageContainer>

      <Table>
        <tr>
          <td>Name</td>
          <td>The Witcher</td>
        </tr>
      </Table>
    </StyledSidebar>
  );
}

export default Sidebar;
