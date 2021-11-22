import React from 'react';

// # component from styled-components
import { ContentDiv } from './styled';

// # data
import { UserCard } from '../UserCard';

// # My images
import myImage from '../../assets/images/drawers.jpg';

function Content() {
  return (
    <ContentDiv>
      <div className="image">
        <img src={myImage} alt="" />
      </div>

      <div className="infoText">
        <h1>
          Shift the overall look and feel by adding these wonderful touches to
          furniture in your home
        </h1>
        <p>
          Ever been in a room and felt like something was missing? Perhaps it
          felt slightly bare and uninviting. I’ve got some simple tips to help
          you make any room feel complete.
        </p>
      </div>

      <UserCard idCard={0} />
    </ContentDiv>
  );
}

export { Content };
