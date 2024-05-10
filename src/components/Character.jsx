import styled from "styled-components";

const P = styled.p`
  font-size: 12px;
`;
const StyledFigure = styled.figure`
  border: 1px solid var(--border-color);
  padding: 8px 8px;
  background-color: #e9ebed;
`;

const ImageContainer = styled.div`
  /* width: 100%; */
`;

const Figcaption = styled.figcaption`
  margin-top: 5px;
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 4px;
`;

function Character({ character }) {
  return (
    <StyledFigure>
      <ImageContainer className="image-container">
        <img src="/garelt.jpg" alt="" width="100%" height="100%" />
      </ImageContainer>
      <Figcaption>{character.name}</Figcaption>
      <P>{character.title}</P>
    </StyledFigure>
  );
}

export default Character;
