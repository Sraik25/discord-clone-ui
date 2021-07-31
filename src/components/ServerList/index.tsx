import React, { FC } from 'react';
import ServerButton from '../ServerButton';
import { Container, Separator } from './styles';


const ServerList: FC = () => {
  return (
    <Container>
      <ServerButton isHome />

      <Separator />

      <ServerButton hasNotifications />
      <ServerButton mentions={3} />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton />
      <ServerButton mentions={3} />
    </Container>
  );
};

export default ServerList;
