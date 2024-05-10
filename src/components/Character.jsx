import styled from "styled-components";

const P = styled.p`
  font-size: 12px;
  color: var(--color-dark-800);
`;

const StyledFigure = styled.figure`
  padding: 8px 8px;
  border-radius: 4px;
  border: 1px solid var(--color-dark-50);
  box-shadow: 0 6px 10px -4px rgba(0, 0, 0, 0.1);
  transition: 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
`;

const ImageContainer = styled.div`
  overflow: hidden;
`;

const Figcaption = styled.figcaption`
  margin-top: 8px;
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 4px;
`;

const Img = styled.img`
  border-radius: 4px;
  transition: 0.3s ease-in-out;

  ${StyledFigure}:hover & {
    filter: grayscale(100);
  }
`;

function Character({ character }) {
  return (
    <StyledFigure>
      <ImageContainer className="image-container">
        <Img src="/garelt.jpg" alt="" width="100%" height="100%" />
      </ImageContainer>
      <Figcaption>{character.name}</Figcaption>
      <P>{character.title}</P>
    </StyledFigure>
  );
}

export default Character;
