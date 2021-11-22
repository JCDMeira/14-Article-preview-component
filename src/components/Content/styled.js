import styled from 'styled-components';

export const ContentDiv = styled.div`
  width: 87.2vw;
  max-width: 60rem;
  height: 51.2rem;
  background: var(--white);
  box-shadow: 0px 6px 4px rgba(158, 175, 194, 0.25);
  border-radius: 1rem;
  overflow: scroll;

  position: relative;

  margin: 0 auto;

  .image {
    width: 100%;
    height: 20rem;

    border-radius: 10px 10px 0px 0px;
    margin-bottom: 3.7rem;

    overflow: hidden;

    img {
      width: 87.2vw;
      max-width: 60rem;
      height: 23.3rem;
    }
  }

  .infoText {
    margin-bottom: 1.8rem;
    h1 {
      font-weight: bold;
      font-size: 1.65rem;
      line-height: 2.4rem;

      color: var(--very-dark-grayish-blue);
      padding: 0 2.9rem 0 3.1rem;
      margin-bottom: 1.3rem;
    }

    p {
      font-weight: normal;
      font-size: 1.35rem;
      line-height: 2rem;
      padding: 0 3.4rem 0 3.2rem;

      color: var(--desaturated-dark-blue);
    }
  }
`;
