import React from "react";
import { example } from "./contants";
import { Chord, ChordContainer, LyricsContainer, LyricsItem } from "./style";

const Lyrics = () => {
  const separator = new RegExp(/[\s,]+/);
  const a = example.split(separator);
  console.log(a);
  return (
    <LyricsContainer>
      {a.map((item, index) => (
        <LyricsItem key={index}>
          <ChordContainer>
            <Chord type="text"/>
            </ChordContainer>
          {item}
        </LyricsItem>
      ))}
    </LyricsContainer>
  );
};

export default Lyrics;
