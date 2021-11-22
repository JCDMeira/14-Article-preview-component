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

  @media (min-width: 1024px) {
    width: 73rem;
    max-width: 73rem;
    height: 28rem;
    display: flex;

    margin-top: 0.6rem;

    .image {
      width: 28.5rem;
      height: 28rem;

      border-radius: 10px 0px 0px 10px;

      margin-bottom: 0rem;

      overflow: hidden;

      img {
        width: 35.2rem;
        height: 28rem;
      }
    }

    .infoText {
      width: 44.5rem;
      /* height: 28rem; */
      margin-bottom: 0;
      padding: 3.3rem 4.4rem 0 4rem;

      h1 {
      font-size: 2.05rem;
      line-height: 2.8rem;

      padding: 0;
    }

    p {
      padding: 0 ;
    }
    }
  }
  }
`;
