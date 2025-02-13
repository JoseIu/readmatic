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
  // console.log('✅ Componente SectionItem montado con sección:', section);

  const { addSectionActive } = useSection();
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: section.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const onSelectSection = () => {
    console.log('Seccion:', section);
    addSectionActive(section);
  };
  return (
    <li style={style} ref={setNodeRef} onClick={onSelectSection} className="user">
      <button {...attributes} {...listeners} aria-label="Drag button to move section">
        <GragIcon className="drag-icon" />
      </button>
      <p className="user__name">{section.title}-a</p>
    </li>
  );
};
