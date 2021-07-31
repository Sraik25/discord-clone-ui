import React, { MutableRefObject, useEffect, useRef } from 'react';
import ChannelMessage, { Mention } from '../ChannelMessage';
import { Container, Input, InputIcon, InputWrapper, Messages } from './styles';

const ChannelData = () => {
  const messagesRef = useRef() as MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage
            key={n}
            author="Pedro Perez"
            date="21/06/20"
            content="Jelou"
          />
        ))}

        <ChannelMessage
          author="Lukas Martines"
          date="21/06/20"
          content={
            <>
              <Mention>@Olek Mallqui</Mention>, i'm new student
            </>
          }
          hasMention
          isBot
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Chat in online chat" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
