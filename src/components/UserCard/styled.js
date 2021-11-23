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

  .modal-none{
    display: ${(props) => (props.isOpen === false ? 'flex' : 'none')};
  }
  .modal{
    position: absolute;
    display: ${(props) => (props.isOpen === true ? 'flex' : 'none')};
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

  @media (min-width: 1024px) {
    width: 445px;
    height: 84px;
    position: relative;

    padding: 1.2rem 3.1rem 1.8rem 4.1rem;

    background: var(--white);
    .avatar {
      margin-right: 1.5rem;
    }

    p {
      margin-left: 0.1rem;
    }

    .myButton {
    right: 4rem;
   }

   .modal-none{
    display: flex;
  }

   .modal{
    position: absolute;
    right: -6.9rem;
    top: -6.1rem;
    width: 24.8rem;
    height: 5.5rem;

    background: #48556A;
    border-radius: 10px;
    display: ${(props) => (props.isOpen === true ? 'flex' : 'none')};
    flex-direction: row;
    align-items: center;
    justify-content: center;

    /* clip-path: path("M0 10C0 4.47715 4.47715 0 10 0H238C243.523 0 248 4.47715 248 10V45C248 50.5228 243.523 55 238 55H136.5H112H10C4.47715 55 0 50.5228 0 45V10Z" fill="#48556A"/>
    <path d="M112 55L116.342 60.0966C120.175 64.5973 127.056 64.8071 131.157 60.5483L136.5 55H112Z" fill="#48556A"/>
    <path d="M112 55L116.342 60.0966C120.175 64.5973 127.056 64.8071 131.157 60.5483L136.5 55H112Z" fill="#48556A"/>
    <path d="M112 55L116.342 60.0966C120.175 64.5973 127.056 64.8071 131.157 60.5483L136.5 55H112Z"); */

    :before {
    border-top: 19px solid var(--very-dark-grayish-blue);
    border-bottom: 15px solid transparent;
    border-left: 17px solid transparent;
    border-right: 17px solid transparent;
    content: '';
    display: block;
    position: absolute;
    width: 0;
    top: 49px;
    left: 107px;
  }

  }

`;
