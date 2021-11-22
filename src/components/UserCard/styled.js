import styled from 'styled-components';

export const Card = styled.div`
  width: 100%;
  height: 7.1rem;

  padding: 1.2rem 3.1rem 0 3.2rem;

  display: flex;
  align-items: center;
  img {
    width: 3.9rem;
    border-radius: 50%;
    margin-right: 1.6rem;
  }

  .text {
    display: flex;
    flex-direction: column;

    h3 {
      font-weight: bold;
      font-size: 1.35rem;

      color: var(--very-dark-grayish-blue);
      margin-bottom: 0.1rem;
    }

    p {
      font-weight: normal;
      font-size: 1.35rem;

      color: var(--grayish-blue);
    }
  }
`;
