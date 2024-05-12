import styled from "styled-components";
import { useCharacter } from "../hooks/useCharacter";
import { camelToNormal } from "../utils/helpers";

const StyledSidebar = styled.div`
  border: 1px solid var(--color-brand-100);
  border-radius: 8px;
  box-shadow: 0 0 10px -1px rgba(0, 0, 0, 0.1);
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Img = styled.img`
  border-radius: 4px;
`;

const Table = styled.table`
  /* width: 100%; */
  margin-top: 20px;
  border-collapse: collapse;
  /* border: 1px solid var(--color-brand-100); */
`;

const Tr = styled.tr`
  &:nth-child(even) {
    background-color: var(--color-dark-50);
  }
`;

const Td = styled.td`
  text-align: left;
  width: 100%;
  padding: 6px 20px;

  &:first-child {
    width: 30%;
  }

  &.title {
    font-weight: 500;
  }
`;

const H4 = styled.h4`
  color: var(--color-dark-500);
  margin-bottom: 16px;
  margin-top: 18px;
  text-align: center;
`;

function Sidebar() {
  const { character, loading, characters } = useCharacter();

  return (
    <StyledSidebar>
      <H4>Garalt of Rivia</H4>
      {loading ? (
        "loading"
      ) : (
        <>
          <ImageContainer>
            <Img src="/garelt.jpg" alt="" width="160px" />
          </ImageContainer>
          <Table>
            <tbody>
              {!character &&
                characters &&
                Object.entries(characters[0]).map(([name, value]) => (
                  <Tr key={name}>
                    <Td className="title">{camelToNormal(name)}</Td>
                    <Td>{value}</Td>
                  </Tr>
                ))}

              {/* Show clicked character */}

              {character &&
                Object.entries(character).map(([name, value]) => (
                  <Tr key={name}>
                    <Td className="title">{camelToNormal(name)}</Td>
                    <Td>{value}</Td>
                  </Tr>
                ))}
            </tbody>
          </Table>{" "}
        </>
      )}
    </StyledSidebar>
  );
}

export default Sidebar;
