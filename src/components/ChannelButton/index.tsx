import React, { FC } from 'react';
import { Container, HashtagIcon, InviteIcon, SettingsIcon } from './styles';

export interface Props {
  channelName: string;
  selected?: boolean;
}

const ChannelButton: FC<Props> = ({ channelName, selected }) => {
  return (
    <Container className={selected ? 'active' : ''}>
      <div>
      <HashtagIcon>#</HashtagIcon>
        <span>{channelName}</span>
      </div>

      <div>
        <InviteIcon />

        <SettingsIcon />
      </div>
    </Container>
  );
};

export default ChannelButton;
