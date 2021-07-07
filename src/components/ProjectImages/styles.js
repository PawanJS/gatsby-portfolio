import styled from 'styled-components';
// import tw from 'tailwind.macro';

export const Project = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  align-items: center;

  @media screen and (max-width: 639px) {
    grid-template-columns: 1fr;
  }

  a {
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: scale(1.05);
    }

    &:hover img {
      filter: brightness(100%);
    }
  }

  img {
    border-radius: 5px;
    filter: brightness(90%);
  }
`;
