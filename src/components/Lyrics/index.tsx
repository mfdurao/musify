import React from "react";
import Chord from "../Chord";
import { example } from "./contants";
import { LyricsContainer, LyricsItem } from "./style";

// Criar component Chord, uma div que quando clica/hover?, 
// mostra uma div com as letras dos acordes e quando clicados, 
// tem seu valor mandado para o componente
// valor padrao = none/null

export interface Props {
  item: string;
  index: number;
}

const Lyrics = () => {
  const separator = "\n";
  const lyrics = example.split(separator);

  return (
    <LyricsContainer>
      {lyrics.map((item, index) => (
        <LyricsItem key={index}>
          <Chord item={item}/>
          {item}
        </LyricsItem>
      ))}
    </LyricsContainer>
  );
};

export default Lyrics;

// import { DragDropContext } from "react-beautiful-dnd";
// import { reorderQuoteMap } from "./DnDIdeas/reorder";
// import { ChordMap } from "./DnDIdeas/types";
// import { AuthorList } from "./DnDIdeas/AuthorList";

// const [columns, setColumns] = useState<ChordMap>(chords);

// eslint-disable-next-line no-lone-blocks
{
  /* <DragDropContext
        onDragEnd={({ destination, source }) => {
          if (!destination) return;

          setColumns(reorderQuoteMap(columns, source, destination));
        }}
      >
        {Object.entries(columns).map(([id, column]) => (
          <AuthorList
            internalScroll
            key={id}
            listId={id}
            listType="CARD"
            columns={column}
          />
        ))} 
      </DragDropContext>
      */
}
