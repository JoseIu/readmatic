import { closestCenter, DndContext, DragEndEvent } from '@dnd-kit/core';
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { useSection } from '../../hooks/useSection';
import { DefaultSections } from '../default-sections/DefaultSections';
import { SectionItem } from '../SectionItem';
import './sideBar.css';

export const SideBar = () => {
  const { sections, newSectionSort } = useSection();

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    const previusIndex = sections.findIndex((person) => person.id === active.id);
    const newIndex = sections.findIndex((person) => person.id === over?.id);
    const newArray = arrayMove(sections, previusIndex, newIndex);
    newSectionSort(newArray);
  };
  return (
    <aside className="sidebar scrollbar">
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <h2 className="sidebar__title">Your sections</h2>
        <SortableContext items={sections} strategy={verticalListSortingStrategy}>
          <ul className="sections">
            {sections.map((section) => (
              <SectionItem key={section.id} section={section} />
            ))}
          </ul>
        </SortableContext>

        <section>
          <h2 className="sidebar__title"> Sections Available</h2>

          <DefaultSections />
        </section>
      </DndContext>
    </aside>
  );
};
