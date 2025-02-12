import { closestCenter, DndContext, DragEndEvent } from '@dnd-kit/core';
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { useState } from 'react';
import { People } from '../../interfaces/people.interface';
import { User } from '../User';
import './sideBar.css';

export const SideBar = () => {
  const [people, setPeople] = useState<People[]>([
    {
      id: 1,
      name: 'John',
    },
    {
      id: 2,
      name: 'Paco',
    },
    {
      id: 3,
      name: 'Joselu',
    },
    {
      id: 4,
      name: 'Sara',
    },
  ]);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    const previusIndex = people.findIndex((person) => person.id === active.id);
    const newIndex = people.findIndex((person) => person.id === over?.id);
    const newArray = arrayMove(people, previusIndex, newIndex);
    setPeople(newArray);
  };
  return (
    <aside className="sidebar">
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <h2>Your sections</h2>
        <SortableContext items={people} strategy={verticalListSortingStrategy}>
          <div className="sections">
            {people.map((person) => (
              <User key={person.id} people={person} />
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </aside>
  );
};
