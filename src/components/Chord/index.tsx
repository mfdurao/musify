import React, { useEffect, useState } from "react";

import { Chords, ChordContainer } from "./style";

export interface Props {
  item: string;
  onChange?: (a: string, index: number) => void;
}

const Chord = ({ item }: Props) => {
  // const [toggleMenu, setToggleMenu] = useState(false);
  const [chord, setChord] = useState("");
  const lyrics = item.split(" ");

  // const handleChange = (a: string, index: number) => {
  //   setChord(a);
  // };
  console.log(chord);

  return (
    <ChordContainer>
      {lyrics.map((a: string, index: number) => (
        <>
          <Chords key={index}>{chord}</Chords>
        </>
      ))}
    </ChordContainer>
  );
};

export default Chord;
