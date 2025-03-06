import { useSection } from '../../hooks/useSection';
import { Section } from '../../interfaces/section.interface';
import { PlusIcon } from '../icons/PlusIcon';
import './defaultSection.css';

type Props = {
  section: Section;
};
export const DefaultSectionItem = ({ section }: Props) => {
  const { addSection } = useSection();

  const onAddSection = () => {
    addSection(section);
  };
  return (
    <li className="deault-item">
      <p className="deault-item__text">{section.title}</p>
      <button
        className="deault-item__button"
        aria-label="button to add default section to your sectios"
        onClick={onAddSection}
      >
        <PlusIcon className="deault-item__icon" />
      </button>
    </li>
  );
};
