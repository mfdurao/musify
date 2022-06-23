import styled from "styled-components";

export const LyricsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
  width: 500px;
  height: 80%;
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

export const ChordContainer = styled.div`
  background-color: white;
  height: 20px;
  max-width: fit-content;
`;

export const Chord = styled.input`
  height: 100%;
  width: 100%;
  border: none;

  :focus{
    outline: none;
  }
`;
