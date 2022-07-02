import React from "react";
import { Droppable, Draggable, DroppableProvided } from "react-beautiful-dnd";

interface Props {
  columns: string[];
  listId: string;
  listType?: string;
  internalScroll?: boolean;
  isCombineEnabled?: boolean;
}

export class AuthorList extends React.Component<Props> {
  static defaultProps = {
    isCombineEnabled: false,
  };
  renderBoard = (dropProvided: DroppableProvided) => {
    const { columns } = this.props;

    return (
      <div>
        <div style={{  background: "yellow", width: 200}} ref={dropProvided.innerRef}>
          {columns.map((column, index: number) => (
            <Draggable key={column} draggableId={column} index={index}>
              {(dragProvided, dragSnapshot) => (
                <div
                  {...dragProvided.dragHandleProps}
                  {...dragProvided.draggableProps}
                  ref={dragProvided.innerRef}
                >
                  <div style={{ backgroundColor: column}}>
                    {column}
                  </div>
                </div>
              )}
            </Draggable>
          ))}
          {dropProvided.placeholder}
        </div>
      </div>
    );
  };

  render() {
    const { listId, listType, internalScroll, isCombineEnabled } = this.props;

    return (
      <Droppable
        droppableId={listId}
        type={listType}
        direction="horizontal"
        isCombineEnabled={isCombineEnabled}
      >
        {(dropProvided) => (
          <div {...dropProvided.droppableProps}>
            {internalScroll ? (
              <div>{this.renderBoard(dropProvided)}</div>
            ) : (
              this.renderBoard(dropProvided)
            )}
          </div>
        )}
      </Droppable>
    );
  }
}
