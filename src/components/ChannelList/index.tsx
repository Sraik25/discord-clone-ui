import React from 'react';
import ChannelButton from '../ChannelButton';
import { AddCategoryIcon, Category, Container } from './styles';

const ChannelList = () => {
  return (
    <Container>
      <Category>
        <span>text channels</span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton selected channelName="Chat-live" />

      <ChannelButton channelName="Works" />

      <ChannelButton channelName="csgo" />

      <ChannelButton channelName="Valorant" />
    </Container>
  );
};

export default ChannelList;
