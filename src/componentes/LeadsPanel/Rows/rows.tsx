import { Column, Container, Client } from "./rows.style";
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd'
import { useState } from "react";
interface Row {
  column: {
    id: string,
    name: string,
    
  },
  lead: {
    id: string,
    name: string,
  }
}

export function Rows(props: Row){
  const [content1, setContent1] = useState(props.lead.name)
  const [content2, setContent2] = useState('')
  const [content3, setContent3] = useState('')

  function handleOnDragEnd(result: DropResult){
    const { destination, source, draggableId } = result
    console.log(result)
    if (
      !destination ||
      destination.droppableId === source.droppableId
      )
      return;
    else {
      if(destination.droppableId === '1')
        setContent1(props.lead.name)
      else if(destination.droppableId === '2')
        setContent2(props.lead.name)
      else
        setContent3(props.lead.name)
      if(source.droppableId === '1')
        setContent1('')
      else if(source.droppableId === '2')
        setContent2('')
      else
        setContent3('')
    }
    
  }


  return (
      <Container>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable key={'1'} droppableId={'1'}>
            {(provided) => (
              <Column {...provided.droppableProps} ref={provided.innerRef}>
                <Draggable key={'1'} draggableId={'1'} index={1}>
                  {(provided) => (
                    <Client {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                      {content1}
                    </Client>
                  )}
                </Draggable>
              </Column>
            )}
          </Droppable>

          <Droppable key={'2'} droppableId={'2'}>
            {(provided) => (
              <Column {...provided.droppableProps} ref={provided.innerRef}>
                <Draggable key={'2'} draggableId={'2'} index={1}>
                  {(provided) => (
                    <Client {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                      {content2}
                    </Client>
                  )}
                </Draggable>
              </Column>
            )}
          </Droppable>

          <Droppable key={'3'} droppableId={'3'}>
            {(provided) => (
              <Column {...provided.droppableProps} ref={provided.innerRef}>
                <Draggable key={'3'} draggableId={'3'} index={1}>
                  {(provided) => (
                    <Client {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                      {content3}
                    </Client>
                  )}
                </Draggable>
              </Column>
            )}
          </Droppable>
        </DragDropContext>
      </Container>
    
  );
}