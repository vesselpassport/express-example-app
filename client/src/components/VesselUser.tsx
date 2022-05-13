import React, { FC } from 'react';
import { User } from 'types/user';

interface VesselUserProps {
  user: User;
}

export const VesselUser: FC<VesselUserProps> = ({ user }) => (
  <div>
    <p>You're logged in:</p>
    <ul>
      <li>{`User ID: ${user.id}`}</li>
      {user.name && <li>{`Name: ${user.name}`}</li>}
      {user.email && <li>{`Email: ${user.email}`}</li>}
      {user.phoneNumber && <li>{`Phone number: ${user.phoneNumber}`}</li>}
    </ul>
  </div>
);
