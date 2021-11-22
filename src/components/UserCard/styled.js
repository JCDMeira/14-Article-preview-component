import styled from 'styled-components';

export const Card = styled.div`
  width: 100%;
  height: 7.1rem;

  padding: 1.2rem 3.1rem 0 3.2rem;

  display: flex;
  align-items: center;
  .avatar {
    width: 3.9rem;
    border-radius: 50%;
    margin-right: 1.6rem;
  }

  .text {
    display: flex;
    flex-direction: column;
    margin-right: 5.9rem;

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

  .myButton {
    width: 3.2rem;
    height: 3.2rem;

    box-shadow: 0px 1px 2px rgba(158, 175, 194, 0.25);
    border-radius: 50%;
    background: var(--light-grayish-blue);
    display: flex;

    button {
      border: none;
      background: rgba(0, 0, 0, 0);
      width: 3.2rem;
      height: 3.2rem;
      img {
        width: 1.5rem;
        height: 1.3rem;
      }
    }
  }
`;
