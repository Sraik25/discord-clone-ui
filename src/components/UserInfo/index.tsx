import React from 'react';
import {
  Avatar,
  Container,
  HeadphoneIcon,
  Icons,
  MicIcon,
  Profile,
  SettingsIcon,
  UserData,
} from './styles';

const UserInfo = () => {
  return (
    <Container>
      <Profile>
        <Avatar />

        <UserData>
          <strong>Olek Mallqui</strong>
          <span>#2698</span>
        </UserData>
      </Profile>

      <Icons>
        <MicIcon />
        <HeadphoneIcon />
        <SettingsIcon />
      </Icons>
    </Container>
  );
};

export default UserInfo;
