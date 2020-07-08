import styled from "styled-components";

export const Container = styled.div`
  grid-area: SL;

  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  
  padding: 11px 0;
  height: 100vh;
  
  background-color: var(--tertiary);

  ::-webkit-scrollbar {
    display: none;
  }
`

export const Separator = styled.div`
  width: 32px;
  border-bottom: 2px solid var(--quaternary);
  margin-bottom: 8px;
`