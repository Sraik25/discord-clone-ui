import React, { FC } from 'react';
import { Avatar, Container, Role, User } from './styles';

interface Props {
  nickname: string;
  isBot?: boolean;
}

const UserRow: FC<Props> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''} />

      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  );
};

const UserList = () => {
  return (
    <Container>
      <Role>Avilable - 1</Role>
      <UserRow nickname="Olek Mallqui" />

      <Role>Offline - 18</Role>
      <UserRow nickname="Marcio Mallqui" isBot />
      <UserRow nickname="Marcio Mallqui" />
      <UserRow nickname="Marcio Mallqui" />
      <UserRow nickname="Marcio Mallqui" isBot />
      <UserRow nickname="Marcio Mallqui" />
      <UserRow nickname="Marcio Mallqui" isBot />
      <UserRow nickname="Marcio Mallqui" />
      <UserRow nickname="Marcio Mallqui" />
      <UserRow nickname="Marcio Mallqui" />
      <UserRow nickname="Marcio Mallqui" />
      <UserRow nickname="Marcio Mallqui" />
      <UserRow nickname="Marcio Mallqui" />
      <UserRow nickname="Marcio Mallqui" />
      <UserRow nickname="Marcio Mallqui" />
      <UserRow nickname="Marcio Mallqui" />
      <UserRow nickname="Marcio Mallqui" />
      <UserRow nickname="Marcio Mallqui" />
      <UserRow nickname="Marcio Mallqui" />
      <UserRow nickname="Marcio Mallqui" />
      <UserRow nickname="Marcio Mallqui" />
      <UserRow nickname="Marcio Mallqui" />
      <UserRow nickname="Marcio Mallqui" />
      <UserRow nickname="Marcio Mallqui" />
      <UserRow nickname="Marcio Mallqui" />

      <UserRow nickname="Marcio Mallqui" />
      <UserRow nickname="Marcio Mallqui" />
      <UserRow nickname="Marcio Mallqui" />
      <UserRow nickname="Marcio Mallqui" />
      <UserRow nickname="Marcio Mallqui" />
      <UserRow nickname="Marcio Mallqui" />
      <UserRow nickname="Marcio Mallqui" />
      <UserRow nickname="Marcio Mallqui" />
      <UserRow nickname="Marcio Mallqui" />
      <UserRow nickname="Marcio Mallqui" />
      <UserRow nickname="Marcio Mallqui" />
      <UserRow nickname="Marcio Mallqui" />
      <UserRow nickname="Marcio Mallqui" />
      <UserRow nickname="Marcio Mallqui" />
      <UserRow nickname="Marcio Mallqui" />
      <UserRow nickname="Marcio Mallqui" />
      <UserRow nickname="Marcio Mallqui" />
      <UserRow nickname="Marcio Mallqui" />
      <UserRow nickname="Marcio Mallqui" />
      <UserRow nickname="Marcio Mallqui" />
      <UserRow nickname="Marcio Mallqui" />
      <UserRow nickname="Marcio Mallqui" />
    </Container>
  );
};

export default UserList;
