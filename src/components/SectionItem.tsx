import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { useSection } from '../hooks/useSection';
import { Section } from '../interfaces/section.interface';
import { GragIcon } from './icons/GragIcon';
import './sectionItem.css';

type Pops = {
  section: Section;
};

export const SectionItem = ({ section }: Pops) => {
  const { addSectionActive } = useSection();
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: section.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const onSelectSection = () => {
    addSectionActive(section);
  };
  return (
    <li style={style} ref={setNodeRef} onClick={onSelectSection} className="user">
      <button className="drag-button" {...attributes} {...listeners} aria-label="Drag button to move section">
        <GragIcon className="drag-icon" />
      </button>
      <p className="user__name">{section.title}</p>
    </li>
  );
};
