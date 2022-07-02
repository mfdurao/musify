import styled from "styled-components";

export const LyricsContainer = styled.div`
  display: flex;
  padding: 60px 30px;
  flex-direction: column;
  justify-content: flex-start;
  align-content: flex-start;
  width: 90%;
  height: 90%;
  gap: 10px;
  overflow-y: scroll;
`;

export const LyricsItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: fit-content;
  color: white;
  gap: 5px;
`;

