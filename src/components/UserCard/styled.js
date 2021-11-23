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

  @media (min-width: 900px) {
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

    /* clip-path: path("m 124.72155,62.762395 -5.38226,-6.45889 -14.67969,-0.16611 c -8.073822,-0.09137 -31.660322,-0.16612 -52.414435,-0.16612 H 14.510401 l -1.69226,-0.88926 c -2.17834,-1.14469 -3.8360899,-2.80663 -4.9046099,-4.917 l -0.85124,-1.68126 V 28.721275 8.9587932 l 0.85124,-1.681259 c 1.06852,-2.110374 2.7262699,-3.7723145 4.9046099,-4.9169975 l 1.69226,-0.889261 H 130.81229 247.11417 l 1.67721,0.881348 c 2.03584,1.069805 3.73102,2.7474475 4.75574,4.7065375 l 0.76517,1.462886 v 20.3018178 20.30182 l -0.89026,1.4853 c -1.23901,2.06715 -2.66343,3.4452 -4.62853,4.47783 l -1.67933,0.88246 h -51.71521 -51.71521 l -6.62146,6.625 c -3.64181,3.64375 -6.69729,6.625 -6.78997,6.625 -0.0927,0 -2.59053,-2.9065 -5.55077,-6.45888 z"); */

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
