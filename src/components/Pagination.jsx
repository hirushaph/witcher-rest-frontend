import styled from "styled-components";

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 30px;
`;

const Button = styled.button`
  padding: 6px 10px;
  border: 2px solid var(--color-brand-800);
  color: var(--color-brand-800);
  font-weight: 600;
  transition: 0.3s ease-in-out;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &:hover,
  &.active {
    background-color: var(--color-brand-800);
    color: white;
  }
`;

function Pagination({
  totalCharacters,
  charactersPerPage,
  setCurrentPage,
  currentPage,
}) {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalCharacters / charactersPerPage); i++) {
    pages.push(i);
  }

  return (
    <Div>
      <Button
        onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        {"<"}
      </Button>
      {pages.map((page) => {
        return (
          <Button
            onClick={() => {
              setCurrentPage(page);
            }}
            key={page}
            className={page === currentPage ? "active" : ""}
          >
            {page}
          </Button>
        );
      })}

      <Button
        onClick={() =>
          currentPage < pages.length && setCurrentPage(currentPage + 1)
        }
        disabled={currentPage >= pages.length ? true : false}
      >
        {">"}
      </Button>
    </Div>
  );
}

export default Pagination;
