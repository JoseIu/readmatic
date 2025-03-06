import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { useSection } from '../hooks/useSection';
import { Section } from '../interfaces/section.interface';
import { GragIcon } from './icons/GragIcon';
import { RemoveIcon } from './icons/RemoveIcon';
import './sectionItem.css';

type Pops = {
  section: Section;
};

export const SectionItem = ({ section }: Pops) => {
  const { addSectionActive, removeSection } = useSection();
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: section.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const onSelectSection = () => {
    addSectionActive(section);
  };
  return (
    <li style={style} ref={setNodeRef} onClick={onSelectSection} className="section">
      <button
        className="section__drag-button"
        {...attributes}
        {...listeners}
        aria-label="Drag button to move section"
      >
        <GragIcon className="section__icon" />
      </button>
      <p className="section__name">{section.title}</p>
      <div>
        <button
          className="section__remove"
          aria-label="button to remove section"
          onClick={() => removeSection(section.id)}
        >
          <RemoveIcon className="section__reset" />
        </button>
      </div>
    </li>
  );
};
