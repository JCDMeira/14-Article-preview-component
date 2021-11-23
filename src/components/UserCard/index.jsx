import React, { useState } from 'react';
import P from 'prop-types';

// # component from styled-components
import { Card } from './styled';

// # data
import users from '../../data/userData';

// # My images
import avatar from '../../assets/images/avatar-michelle.jpg';
import icon from '../../assets/images/icon-share.svg';
import iconClick from '../../assets/images/icon-share 2.svg';
import facebookIcon from '../../assets/images/icon-facebook.svg';
import twitterIcon from '../../assets/images/icon-twitter.svg';
import pintrestIcon from '../../assets/images/icon-pinterest.svg';

function UserCard({ idCard }) {
  const [isOpen, setIsOpen] = useState(true);

  function handleClick() {
    setIsOpen(!isOpen);
  }
  return (
    <Card isOpen={isOpen}>
      {isOpen === true ? (
        <div className="modal">
          <p className="share">SHARE</p>
          <div className="social">
            <img src={facebookIcon} alt="facebook icon" />
            <img src={twitterIcon} alt="twitter icon" />
            <img src={pintrestIcon} alt="pintrest Icon" />
          </div>
        </div>
      ) : (
        <div className="modal">
          <img className="avatar" src={avatar} alt="avatar photo" />
          <div className="text">
            <h3>{users[idCard].username}</h3>
            <p>{users[idCard].creationData}</p>
          </div>
        </div>
      )}

      <div className="myButton">
        <button onClick={() => handleClick()}>
          <img src={isOpen ? iconClick : icon} alt="share button" />
        </button>
      </div>
    </Card>
  );
}

export { UserCard };

UserCard.propTypes = {
  idCard: P.number.isRequired,
};
