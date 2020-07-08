import React, { useRef, useEffect} from 'react'

import ChannelMessage, { Mention } from '../ChannelMessage'
import { Container, Messages, InputWrapper, Input, InputIcon } from './styles'

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>

  useEffect(() => {
    const div = messagesRef.current

    if (div) {
      div.scrollTop = div.scrollHeight
    }
  }, [messagesRef])

  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage 
            key={n}
            author="Pedro Belloto"
            date="31/08/1997"
            content="Hoje é meu aniversário"
          />
        ))}

        <ChannelMessage 
          author="Dhina Hanna"
          date="31/08/1997"
          content={
            <>
              <Mention>@Pedro belloto</Mention>, compra ração para as cachorras
            </>
          }
          hasMention
          isBot
        />

      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  )
}

export default ChannelData

