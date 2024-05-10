import styled from "styled-components";
import { useCharacter } from "../hooks/useCharacter";
import { camelToNormal } from "../utils/helpers";

const StyledSidebar = styled.div``;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Table = styled.table`
  width: 100%;
  margin-top: 10px;
  border-collapse: collapse;
  border: 1px solid var(--color-brand-100);
`;

const Tr = styled.tr`
  &:nth-child(even) {
    background-color: var(--color-brand-100);
  }
`;

const Td = styled.td`
  text-align: left;
  width: 100%;
  padding: 6px 2px;

  &:first-child {
    width: 30%;
  }
`;

function Sidebar() {
  const { character } = useCharacter();

  return (
    <StyledSidebar>
      <ImageContainer>
        <img src="/garelt.jpg" alt="" width="180px" />
      </ImageContainer>

      <Table>
        <tbody>
          {character &&
            Object.entries(character).map(([name, value]) => (
              <Tr key={name}>
                <Td>{camelToNormal(name)}</Td>
                <Td>{value}</Td>
              </Tr>
            ))}
        </tbody>
      </Table>
    </StyledSidebar>
  );
}

export default Sidebar;
