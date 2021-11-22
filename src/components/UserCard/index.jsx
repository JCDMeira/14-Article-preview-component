import React from 'react';
import P from 'prop-types';
import { Card } from './styled';
import users from '../../data/userData';
import avatar from '../../assets/images/avatar-michelle.jpg';

function UserCard({ idCard }) {
  return (
    <Card>
      <img src={avatar} alt="avatar photo" />
      <div className="text">
        <h3>{users[idCard].username}</h3>
        <p>{users[idCard].creationData}</p>
      </div>
    </Card>
  );
}

export { UserCard };

UserCard.propTypes = {
  idCard: P.number.isRequired,
};
