import React from 'react';
import {
  Container,
  Descripcion,
  HashtagIcon,
  Separador,
  Title,
} from './styles';

const ChannelInfo = () => {
  return (
    <Container>
      <HashtagIcon>#</HashtagIcon>

      <Title>chat-live</Title>
      <Separador />

      <Descripcion>Open channel for conversation</Descripcion>
    </Container>
  );
};

export default ChannelInfo;
