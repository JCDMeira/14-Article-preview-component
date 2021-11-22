import React from 'react';
import P from 'prop-types';
import { Card } from './styled';
import users from '../../data/userData';
import avatar from '../../assets/images/avatar-michelle.jpg';
import icon from '../../assets/images/icon-share.svg';

function UserCard({ idCard }) {
  // const isOpen = false;
  return (
    <Card>
      <img className="avatar" src={avatar} alt="avatar photo" />

      <div className="text">
        <h3>{users[idCard].username}</h3>
        <p>{users[idCard].creationData}</p>
      </div>

      <div className="myButton">
        <button>
          <img src={icon} alt="share button" />
        </button>
      </div>
    </Card>
  );
}

export { UserCard };

UserCard.propTypes = {
  idCard: P.number.isRequired,
};
