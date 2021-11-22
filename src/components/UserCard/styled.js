import styled from 'styled-components';

export const Card = styled.div`
  width: 100%;
  height: 7.1rem;
  border-radius: 0 0 1rem 1rem;

  padding: 1.2rem 3.1rem 1.8rem 3.2rem;

  display: flex;
  align-items: center;

  position: absolute;
  bottom: 0;

  background: ${(props) =>
    props.isOpen ? 'var(--very-dark-grayish-blue)' : 'var(--white)'};
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
      margin-bottom: 0.2rem;
    }

    p {
      font-weight: normal;
      font-size: 1.35rem;

      color: var(--grayish-blue);
    }
  }

  .share {
    font-weight: bold;
    font-size: 1.35rem;
    line-height: 1.8rem;
    letter-spacing: 0.3em;

    margin-right: 1.7rem;

    color: var(--white);
  }

  .social {
    width: 9.2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .myButton {
    width: 3.2rem;
    height: 3.2rem;

    box-shadow: 0px 1px 2px rgba(158, 175, 194, 0.25);
    border-radius: 50%;
    background: ${(props) =>
      props.isOpen
        ? 'var(--desaturated-dark-blue)'
        : 'var(--light-grayish-blue)'};
    display: flex;
    position: absolute;
    right: 3.2rem;

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
